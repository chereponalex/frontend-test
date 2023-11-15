import express from "express";
import compression from "compression";
// import webpack from "webpack";
// import WebpackHotMiddleware from "webpack-hot-middleware";
// import WebpackDevMiddleware from "webpack-dev-middleware";
// import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { checkAuth } from "@/server/middleware/checkAuth";
import renderer from "@/server/renderer";

// dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack")
  const WebpackHotMiddleware = require("webpack-hot-middleware")
  const WebpackDevMiddleware = require("webpack-dev-middleware")
  const webpackConfig = require("../../webpack/dev/webpack.dev.client.js");
  const compiler: any = webpack(webpackConfig);

  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
    })
  );

  app.use(WebpackHotMiddleware(compiler));
}

// Gzip
app.use(compression());
app.use(cookieParser());
app.use(express.static("dist"));

app.get("/*", checkAuth, (req: express.Request, res: express.Response) => {
  try {
    res.send(renderer(req));
  } catch (err) {
    console.log("error in rendering server side:", err);
  }
});
const port = parseInt(process.env[["APP_PORT"][0]] ?? "3000", 10)
const host = process.env[["APP_HOST"][0]] || "127.0.0.1"

app.listen(port, host, () => {
  console.log(`Соединение с сервером ${host} прошло успешно PORT: ${port}`)
});



// npm start - to start the application with HMR
// npm run startWatch - to start the application and see real time changes on client and server side on reload
// npm run build:prod - to create a prod build. It will create a dist folder and dist/server.js will contain the final build code.
// npm run build:dev - to create a dev build

// docker build --build-arg BACKEND_URL=http:// --build-arg APP_HOST=0.0.0.0 --build-arg APP_PORT=3000 -t front-img .

// with expose
// docker run --network=test-typeorm_app-network -e BACKEND_URL=https:// -e APP_HOST=0.0.0.0 -e APP_PORT=3000  -p 3000:3000 --name frontend -d front-img

// without expose
// docker run --network=test-typeorm_app-network -e BACKEND_URL=https:// -e APP_HOST=0.0.0.0 -e APP_PORT=3000 -p 3000 --name frontend -d front-img