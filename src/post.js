import { chatList } from "./chat-list.js";
import { DEFAULT_CHANNEL_KEY } from "./constants.js";

export async function postTeamsAdaptiveCard(adaptiveCard, channelKey = DEFAULT_CHANNEL_KEY) {
    const webhook = chatList[channelKey]?.webhook;
    if (!webhook) {
        throw new Error(`No webhook for channel: ${channelKey}`);
    }
    const body = {
        type: "message",
        attachments: [
            {
                contentType: "application/vnd.microsoft.card.adaptive",
                content: adaptiveCard,
            },
        ],
    };
    const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`sendMessage failed: ${res.status} ${text}`);
    }
}
