import { patch } from "@/client/network";
import { config } from "../../../config";
import { CreateReviewRequest } from "@/client/network/types";

export const updateReview = (data: CreateReviewRequest, id: number | string) =>
    patch<void, CreateReviewRequest>(`${config.BACKEND_URL}/api/reviews/edit/${id}`, { ...data})
