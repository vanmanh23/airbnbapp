import { Hono } from "hono";
import { roomsService } from "./rooms.service";

export const router =new Hono();

router.get("rooms/:roomId", (c) => {
    const roomId = c.req.param("roomId");
    const room = roomsService.getBy(roomId);
    return c.json(room);
})