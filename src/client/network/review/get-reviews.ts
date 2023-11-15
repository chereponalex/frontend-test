import { get } from "@/client/network";
import { config } from "../../../config";
import { GetReviewsResponse } from "@/client/network/types";

export const getReviews = () => get<GetReviewsResponse, void>(`${config.BACKEND_URL}/api/reviews`)