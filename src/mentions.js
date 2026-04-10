import { chatList } from "./chat-list.js";
import { DEFAULT_CHANNEL_KEY } from "./constants.js";

export function buildMentionEntities(channelKey = DEFAULT_CHANNEL_KEY) {
    const members = chatList[channelKey]?.member ?? [];
    return members.map((m) => ({
        type: "mention",
        text: `<at>${m.name}</at>`,
        mentioned: {
            id: m.email,
            name: m.name,
        },
    }));
}

export function buildMentionText(channelKey = DEFAULT_CHANNEL_KEY) {
    const members = chatList[channelKey]?.member ?? [];
    return members.map((m) => `<at>${m.name}</at>`).join(" ");
}
