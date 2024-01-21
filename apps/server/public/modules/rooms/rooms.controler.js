import { Hono } from "hono";
import { roomsService } from "./rooms.service";
export const router = new Hono();
router.get("/:roomId", (c) => {
    const roomId = c.req.param("roomId");
    const room = roomsService.getBy(roomId);
    return c.json(room);
});
