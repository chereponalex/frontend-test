import { post } from "@/client/network";
import { config } from "../../../config";
import { LoginUserRequest } from "@/client/network/types";

export const  loginUser = (dataCredentials: LoginUserRequest) =>
    post<{ access_token: string }, LoginUserRequest>(`${config.BACKEND_URL}/api/auth/login/`, dataCredentials)
