import { z } from "zod";

export const createRoomDto = z.object({
    name: z.string({required_error: "name is required"}),
    description: z.string({required_error: "description is required"}),
    price: z.number({required_error: "price is required"}),
    userId: z.string({required_error: "userId is required"}),
    categoryId: z.string({required_error: "categoryId is required"}),
})