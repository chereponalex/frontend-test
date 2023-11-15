import { NextFunction, Request, Response } from 'express';
import { TOKEN_COOKIE_KEY } from "../../utils/cookie";

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hasCookie = !!req.cookies[TOKEN_COOKIE_KEY]
        if (!hasCookie && req.url !== "/") {
            res.redirect("/")
            return
        } else if (hasCookie && req.url === "/") {
            res.redirect("/main")
            return
        }
        next();
    } catch (err: any) {
        console.log('CHECK AUTH ERROR', err)
        res.clearCookie(TOKEN_COOKIE_KEY).redirect("/")
    }
};