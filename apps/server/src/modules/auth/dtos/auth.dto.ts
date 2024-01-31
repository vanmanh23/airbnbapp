import { z } from "zod";

export const signInDto = z.object(
    {
        email: z.string(
            {
                required_error: "email is required",
            }
        ).email(
                "email must be a valid email",
        ),
        password: z.string(
            {
                required_error: "password is required",
            }
        ).min(6, "password must be at least 6 characters"),
    });
export const signUpDto = z.object({
    email: z.string({
        required_error: "email is required",
    }).email("email must be a valid email"),
    password: z.string({
        required_error: "password is required",
    }).min(6, "password must be at least 6 characters"),
})