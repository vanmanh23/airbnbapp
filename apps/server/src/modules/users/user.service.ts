import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";


export class UsersService {
    static async getBywithError(email: string){
        const user = await db.user.findUnique({
            where: {
                email
            }
        });
        if(!user){
            throw new BadRequestException("User not found")
        }
        return user;
    }
}