import { Delete } from "@/client/network";
import { config } from "../../../config";

export const deleteReview = (id: number | string) =>
    Delete<void, void>(`${config.BACKEND_URL}/api/reviews/delete/${id}`,)
