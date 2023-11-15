export type LoginUserRequest =  {
    email: string
    password: string
}

export enum DropdownStatus {
    DRAFT = 'черновик',
    PUBLISHED = 'опубликован',
}

export type CreateReviewRequest = {
    name: string
    text: string
    status: string
}


export type ReviewType = {
    id: string
    name: string
    text: string
    status: DropdownStatus
    createdAt: string
    updatedAt: string
}

export type GetReviewsResponse = {
    reviewsByUser: {
        id: number
        email: string
        reviews: ReviewType[]
    }
}