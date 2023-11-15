import loadable from "@loadable/component";
import { RouteConfig } from "react-router-config";
export const LoginPage = loadable(()=> import("./login/LoginPage"));
export const MainPage = loadable(()=> import("./main/MainPage"));
export const ReviewPage = loadable(()=> import("./review/ReviewPage"));



export const routes: RouteConfig[] = [

    {
        path: "/main",
        exact: true,
        component: MainPage
    },
    {
        path: "/reviews",
        exact: true,
        component: ReviewPage
    },
    {
        path: "/",
        exact: true,
        component: LoginPage
    },

];
