import { db } from "@/lib/db";
import { Room } from "@prisma/client";

export class roomsService {
    static async getAll(categoryid: string) {
        const rooms = await db.room.findMany({
            where: {
                categoryId: categoryid
            }
        });
        console.log("rooms: ",rooms)
        return rooms
    }
    static async create(data: Room, categoryId: string) {
        try{
            const category = await db.category.findUnique({
                where: {
                    id: categoryId
                }
            })
            console.log("category: ",category)
            const room = await db.room.create({
                data: {
                    ...data,
                    categoryId: categoryId
                }
            });
            return room;
        }catch(error){
            throw error;
        }
    }
}