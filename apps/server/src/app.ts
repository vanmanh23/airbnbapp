import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { categoriesService } from "./modules/categories.service";
import { roomsService } from "./modules/rooms.service";
import { cabinsService } from "./modules/cabins.service";
import { beachService } from "./modules/beach.service";
import { framesService } from "./modules/frames.service";
import { castelsService } from "./modules/castels.service";
import { surfingsService } from "./modules/surfings.service";



const app =new Hono().basePath("/api");

app.use("*", logger());
app.use(
    "*",
    cors({
        origin: ["http://localhost:5173", "https://airbnbapp-web.vercel.app"],
        credentials: true,
    })
);

app.get("categories", (c) => {
    const categories = categoriesService.getAll();
    return c.json(categories);
});

app.get("/categories/:categoryId/rooms", (c) => {
    const categoryId = c.req.param("categoryId");
    if(categoryId === "1"){
    const rooms = roomsService.getBy(categoryId)
    return c.json(rooms)
    }
    if(categoryId === "2"){
        const cabins = cabinsService.getBy(categoryId)
        return c.json(cabins)
    }
    if(categoryId === "3"){
        const beachs = beachService.getBy(categoryId)
        return c.json(beachs)
    }
    if(categoryId === "4"){
        const frames = framesService.getBy(categoryId)
        return c.json(frames)
    }
    if(categoryId === "5"){
        const castels = castelsService.getBy(categoryId)
        return c.json(castels)
    }
    if(categoryId === "6"){
        const surfings = surfingsService.getBy(categoryId)
        return c.json(surfings)
    }
    return c.json([]);
})
export default app;