import { chatList } from "./chat-list.js";
import { CURSOR_SPENDING_DASHBOARD_URL } from "./constants.js";
import { formatTimestampDisplay } from "./format.js";
import { buildMentionEntities, buildMentionText } from "./mentions.js";

const FOOTER_HINT =
    "\u0110\u00ednh k\u00e8m \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh Spending (vd. @image.png). " +
    "File tr\u00ean m\u00e1y kh\u00f4ng g\u1eedi qua webhook; c\u00f3 th\u1ec3 d\u00f9ng URL \u1ea3nh HTTPS ho\u1eb7c " +
    "\u0111\u0103ng \u1ea3nh tr\u1ef1c ti\u1ebfp trong chat.";

export function buildCursorReminderCard(channelKey, imageUrlOption) {
    const mentionText = buildMentionText(channelKey);
    const channel = chatList[channelKey];
    const imageUrl = imageUrlOption ?? channel?.reminderSampleImageUrl ?? null;
    const spendingLinkMd = `[cursor.com/dashboard/spending](${CURSOR_SPENDING_DASHBOARD_URL})`;
    const footerHint = imageUrl ? "" : FOOTER_HINT;
    const ts = formatTimestampDisplay();

    const cardBody = [
        {
            type: "TextBlock",
            text: `\u2705 Ki\u1ec3m tra t\u00e0i kho\u1ea3n Cursor`,
            weight: "Bolder",
            size: "Large",
            color: "Good",
        },
        {
            type: "TextBlock",
            text: "Spending, g\u00f3i \u0111\u0103ng k\u00fd v\u00e0 m\u1ee9c s\u1eed d\u1ee5ng",
            weight: "Bolder",
            size: "Medium",
            spacing: "Small",
        },
        {
            type: "TextBlock",
            text:
                "M\u1edf trang Spending, \u0111\u1ed1i chi\u1ebfu plan (Pro/Pro+), % usage v\u00e0 on-demand; " +
                "ch\u1ee5p m\u00e0n h\u00ecnh l\u00e0m b\u1eb1ng ch\u1ee9ng v\u00e0 g\u1eedi v\u00e0o k\u00eanh.",
            wrap: true,
            spacing: "Small",
            isSubtle: true,
        },
        {
            type: "FactSet",
            spacing: "Medium",
            facts: [
                {
                    title: "M\u1ee5c \u0111\u00edch:",
                    value:
                        "Xem t\u00ecnh tr\u1ea1ng \u0111\u0103ng k\u00fd v\u00e0 usage tr\u00ean Cursor (cu\u1ed1i ng\u00e0y)",
                },
                {
                    title: "Ph\u1ee5 tr\u00e1ch:",
                    value: mentionText,
                },
                {
                    title: "Vi\u1ec7c c\u1ea7n l\u00e0m:",
                    value:
                        "Spending \u2192 ch\u1ee5p \u1ea3nh (plan + usage) \u2192 \u0111\u0103ng trong chat k\u00e8m \u1ea3nh",
                },
                {
                    title: "Th\u1eddi \u0111i\u1ec3m nh\u1eafc:",
                    value: ts,
                },
            ],
        },
        {
            type: "TextBlock",
            text: `**Trang Spending:** ${spendingLinkMd}`,
            wrap: true,
            spacing: "Medium",
        },
    ];
    if (footerHint) {
        cardBody.push({
            type: "TextBlock",
            text: footerHint,
            wrap: true,
            spacing: "Small",
            isSubtle: true,
        });
    }
    if (imageUrl) {
        cardBody.push({
            type: "TextBlock",
            text: "V\u00ed d\u1ee5 / m\u1eabu:",
            wrap: true,
            spacing: "Medium",
            weight: "Bolder",
        });
        cardBody.push({
            type: "Image",
            url: imageUrl,
            size: "Large",
        });
    }

    return {
        type: "AdaptiveCard",
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.4",
        msteams: {
            entities: buildMentionEntities(channelKey),
        },
        body: cardBody,
        actions: [
            {
                type: "Action.OpenUrl",
                title: "M\u1edf Spending",
                url: CURSOR_SPENDING_DASHBOARD_URL,
            },
        ],
    };
}
