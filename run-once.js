import "dotenv/config";
import { sendMessage } from "./src/send.js";

try {
    await sendMessage();
} catch (err) {
    console.error(err);
    process.exit(1);
}
