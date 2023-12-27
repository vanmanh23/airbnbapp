import { db } from "@/lib/db";
import { type User, Category } from "@prisma/client";

export class CategoriesService {
  static async getAll() {
    const data = await db.category.findMany({});
    return data;
  }
  static async create(data: Category){
    try{
      const category = await db.category.create({data})
    return category;
    }catch(error){
      console.log(error)
    }
  }
}