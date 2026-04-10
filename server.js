/**
 * HTTP + cron entry for production; bundled to dist/server.js for deploy (esbuild).
 */
import "dotenv/config";
import cron from "node-cron";
import express from "express";
import { sendMessage } from "./src/send.js";

const pattern = "30 16 * * 1-5";
const timezone = "Asia/Ho_Chi_Minh";

cron.schedule(
    pattern,
    async () => {
        try {
            await sendMessage();
            console.log(`[${new Date().toISOString()}] reminder ok`);
        } catch (err) {
            console.error(`[${new Date().toISOString()}] reminder failed`, err);
        }
    },
    { timezone },
);

console.log(`Cron JS: ${pattern} (${timezone}), Mon-Fri only. Process stays running; Ctrl+C to stop.`);

const app = express();

app.get("/", (req, res) => {
    res.type("text/plain").send("ok");
});

app.get("/health", (req, res) => {
    res.type("text/plain").send("ok");
});

const port = Number.parseInt(process.env.PORT ?? "3000", 10) || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on 0.0.0.0:${port}`);
});
