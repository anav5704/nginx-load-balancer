import { serve } from "@hono/node-server";
import { Hono } from "hono";

const id = process.env.SERVER_ID,
    port = 3000;

const app = new Hono();

app.get("/", (c) => c.text(`Hello NGINX ${id}`));

console.log(`Server ${id} is running on http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
