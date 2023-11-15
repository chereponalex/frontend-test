import { post } from "@/client/network";
import { config } from "../../../config";
import { CreateReviewRequest  } from "@/client/network/types";

export const createReview = (data: CreateReviewRequest) =>
    post<void, CreateReviewRequest >(`${config.BACKEND_URL}/api/reviews/create`, data)
