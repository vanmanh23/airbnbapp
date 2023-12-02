import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);


app.get('/categories', (c) => c.json([{"id":"1","name":"Rooms","icon":"https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"},{"id":"234","name":"Cabins","icon":"\thttps://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"},{"id":"345","name":"Beach","icon":"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"},{"id":"456","name":"A-frames","icon":"https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"},{"id":"789","name":"Castels","icon":"https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"},{"id":"345","name":"Beach","icon":"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"},{"id":"456","name":"A-frames","icon":"https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"},{"id":"789","name":"Castels","icon":"https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"},{"id":"234","name":"Cabins","icon":"\thttps://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"},{"id":"345","name":"Beach","icon":"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"},{"id":"456","name":"A-frames","icon":"https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"},{"id":"789","name":"Castels","icon":"https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"},{"id":"345","name":"Beach","icon":"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"},{"id":"456","name":"A-frames","icon":"https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"},{"id":"789","name":"Castels","icon":"https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"}]))

export default handle(app)
