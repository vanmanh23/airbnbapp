import { db } from "@/lib/db";
import { type User, Category } from "@prisma/client";

export class CategoriesService {
  static async getAll() {
    const data = await db.category.findMany({});
    return data;
  }
  static async create(data: Category){   
    try {
      const category = await db.category.create({data});
      return category;   
        } catch (error) {
          console.log(error);
          throw error;
        } 
  }
  static async update(id: string, data: Category) {
    try{
      const category = await db.category.update({where: {id}, data});
      return category;
    }catch(error){
      console.log(error);
      throw error;
    }
  }
}