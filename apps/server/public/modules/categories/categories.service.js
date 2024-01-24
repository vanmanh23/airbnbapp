import { db } from "../../lib/db";
export class CategoriesService {
    static async getAll() {
        const data = await db.category.findMany({});
        return data;
    }
    static async create(data) {
        try {
            const category = await db.category.create({ data });
            return category;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async update(id, data) {
        try {
            const category = await db.category.update({ where: { id }, data });
            return category;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
