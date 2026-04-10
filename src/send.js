import { buildCursorReminderCard } from "./card.js";
import { listChannelKeys } from "./channels.js";
import { chatList } from "./chat-list.js";
import { postTeamsAdaptiveCard } from "./post.js";

/**
 * Post Cursor account reminder to Teams. Omits channelKey to fan-out every entry in chatList; set channelKey to target one channel only.
 */
export async function sendMessage(options = {}) {
    const { channelKey = null, imageUrl = null } = options;
    const keys = channelKey != null ? [channelKey] : listChannelKeys();
    for (const key of keys) {
        if (!chatList[key]) {
            throw new Error(`Unknown channel: ${key}`);
        }
        await postTeamsAdaptiveCard(buildCursorReminderCard(key, imageUrl), key);
    }
}
