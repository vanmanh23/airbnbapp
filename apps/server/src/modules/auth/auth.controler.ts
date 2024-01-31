import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { AuthService } from "./auth.service";
import { signInDto, signUpDto } from "./dtos/auth.dto";

export const router = new Hono();

router
.post("/signup", zValidator( "json", signUpDto) , async (c) => {
    const {email, password} = await c.req.json();
    await AuthService.signUp(email, password);
    return c.json({message: "create account successfully"});
})
.post("/signin", zValidator( "json", signInDto) , async (c) => {
    const {email, password} = await c.req.json();
    const accesstoken = await AuthService.signIn(email, password);
    return c.json({accesstoken});
})