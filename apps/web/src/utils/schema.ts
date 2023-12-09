import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email({ message: 'email is required' }),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

