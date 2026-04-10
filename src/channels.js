import { chatList } from "./chat-list.js";

export function listChannelKeys() {
    return Object.keys(chatList);
}
