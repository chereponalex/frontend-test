import { sessionToken } from "./cookie";

export const logout = () => {
    
    sessionToken.remove()
    window.open("/","_self")
}