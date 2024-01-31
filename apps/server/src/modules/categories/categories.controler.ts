import { Hono } from "hono";
import { CategoriesService } from "./categories.service";
import { roomsService } from "../rooms/rooms.service";

export const router = new Hono();

router
.get("/",  async (c) => {
    const categories = await CategoriesService.getAll();
    return c.json({message: "Get all categories", data: categories});
  })
.post("/", async (c) => {
  const data = await c.req.json();
  const category = await CategoriesService.create(data);
  return c.json({
    message: "Category created successfully",
    data: data,
  })
})
.get("/:categoryId/rooms", async (c) => {
    const id = c.req.param("categoryId");
    const rooms = await roomsService.getAll(id);
    return c.json(rooms);
  })
.post("/:categoryId/createroom", async (c) => {
  const id = c.req.param("categoryId");
  const room = await c.req.json();
  await roomsService.create(room, id);
  return c.json({message: "Room created successfully"});
})