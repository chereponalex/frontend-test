# Getting Started with react-final-boilerplate

1. Clone the code
2. "yarn install"
3. "yarn run start" for hot reload of client and server. Open http://localhost:3000/ and you can see your changes 

# Modules Installed

1. babel
2. webpack,
3. loadable components - for code splitting
4. styled components - for styling
5. react router config

# File Structure
src
  client
    index.ts - contains coniguration for client starting point
  server
    index.ts - configuration for server starting point
    renderer.tsx - set up for the code splitting at the server side
    html
      html.ts - main html file that serves the root of the project

# Dockerized application
docker build --build-arg BACKEND_URL=http:// --build-arg APP_HOST=0.0.0.0 --build-arg APP_PORT=3000 -t front-img .

docker run --network=test-typeorm_app-network -e BACKEND_URL=https:// -e APP_HOST=0.0.0.0 -e APP_PORT=3000 -p 3000 --name frontend -d front-img
