import { Hono } from "hono";
import { CategoriesService } from "./categories.service";
export const router = new Hono();
router
    .get("/", async (c) => {
    const categories = await CategoriesService.getAll();
    return c.json({ message: "hello", data: categories });
})
    .post("/", async (c) => {
    const data = await c.req.json();
    console.log("data: ", data);
    const category = await CategoriesService.create(data);
    return c.json({
        message: "Category created successfully",
        data: data,
    });
});