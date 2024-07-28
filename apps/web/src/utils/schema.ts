import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email({ message: 'email is required' }),
    password: z.string().min(6, "Password must be at least 6 characters"),

})

export const updateProfileForm = z.object({
  firstName: z
    .string()
    .transform(value => value.trim())
    .pipe(
      z
        .string()
        .min(1, { message: 'First name is required' })
        .max(32, { message: 'First name is too long' })
        .refine(value => /^[a-zA-Z]+[-'s]?[a-zA-Z]+$/.test(value), 'First name should contain only alphabets')
    ),
  lastName: z
    .string()
    .transform(value => value.trim())
    .pipe(z.string().min(1, { message: 'Last name is required' })),
  phoneNumber: z
  .string()
  .transform(value => value.trim())
  .pipe(
    z.string().min(10, { message: 'Phone number is required' })
    .max(10, { message: 'Phone number is too long' })),
    age: z
    .string()
    .transform(value => value.trim())
    .refine(value => /^[0-9]+$/.test(value), 'Age should contain only numbers'),
    address: z
    .string()
    .transform(value => value.trim())
    .pipe(z.string().min(1, { message: 'Address is required' })),
    avatar: z
    .string()
    .transform(value => value.trim()),
})