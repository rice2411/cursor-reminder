/**
 * Summary: Per-channel Teams members live here; webhook URLs are read from env (CHAT_WEBHOOK_*). See .env.example.
 */
export const chatList = {
    cursor011: {
        webhook: process.env.CHAT_WEBHOOK_CURSOR011,
        member: [
            {
                name: "quangnd3",
                email: "quangnd3@rikkeisoft.com",
            },
            {
                name: "duytv3",
                email: "duytv3@rikkeisoft.com",
            },
        ],
    },
    // cursor182: {
    //     webhook: process.env.CHAT_WEBHOOK_CURSOR182,
    //     member: [
    //         {
    //             name: "duongnt5",
    //             email: "duongnt5@rikkeisoft.com",
    //         },
    //     ],
    // },
    // cursor183: {
    //     webhook: process.env.CHAT_WEBHOOK_CURSOR183,
    //     member: [
    //         {
    //             name: "vynht",
    //             email: "vynht@rikkeisoft.com",
    //         },
    //         {
    //             name: "anhntn4",
    //             email: "anhntn4@rikkeisoft.com",
    //         },
    //     ],
    // },
    // cursor184: {
    //     webhook: process.env.CHAT_WEBHOOK_CURSOR184,
    //     member: [
    //         {
    //             name: "vuta2",
    //             email: "vuta2@rikkeisoft.com",
    //         },
    //         {
    //             name: "thangpd2",
    //             email: "thangpd2@rikkeisoft.com",
    //         },
    //     ],
    // },
    // cursor185: {
    //     webhook: process.env.CHAT_WEBHOOK_CURSOR185,
    //     member: [
    //         {
    //             name: "hanhdtt",
    //             email: "hanhdtt@rikkeisoft.com",
    //         },
    //         {
    //             name: "huytv5",
    //             email: "huytv5@rikkeisoft.com",
    //         },
    //     ],
    // },
};
