import React from 'react';
import { Switch } from "react-router-dom";
import { routes } from "@/client/pages/routes";
import { SSRRoute } from "@/client/components/SSRRoute/SSRRoute";
import { GlobalStyles } from "@/client/styles";
import "@/client/global.css";


export type AppPropsType = {
    [key: string]: string
}

const App = (props: AppPropsType) => {

    return (
        <>
            <GlobalStyles />
            <Switch>
                {routes.map((route, i) => (
                    <SSRRoute                      
                        appProps={props}
                        path={route.path as string}
                        route={route}
                        key={i}
                    />
                ))}
            </Switch>
        </>
    )
}

export default App;
