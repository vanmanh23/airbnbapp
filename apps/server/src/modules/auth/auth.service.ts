//toast
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";
import { JWT_SECRET } from "@/lib/constants";
import { UsersService } from "../users/user.service";

const ACCESS_TOKEN_EXPIRE_IN = 60 * 60;

export class AuthService {
    static async signUp(email: string, password: string) {
        const user = await db.user.findUnique({
            where: {
                email
            }
        })
        if(user){
            throw new BadRequestException("User already exists")
        }

        const salt = await bcrypt.genSaltSync();
        const hashPassword = await bcrypt.hash(password, salt);

        await db.user.create({
            data: {
                email,
                password: hashPassword,
            }
        })
    }

    static createToken(user: User) {
        return jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRE_IN,
        });
    }

    static async signIn(email: string, password: string) {
        const user = await UsersService.getBywithError(email);
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new BadRequestException("Invalid credentials");
        }
        const accessToken = AuthService.createToken(user);
        return accessToken;
    }
}