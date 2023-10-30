module.exports.config = {
    name: "شات",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "عمر",
    description: "مال خلق اكتب المهم سمسم",
    commandCategory: "ترفية",
    usages: "[ا]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}

const axios = require("axios");

async function simsimi(text) {
    try {
        const encodedText = encodeURIComponent(text);
        const response = await axios.get(`https://api.simsimi.net/v2/?text=${encodedText}&lc=ar`);
        return { error: false, data: response.data };
    } catch (error) {
        return { error: true, data: {} };
    }
}

module.exports.onLoad = async function () {
    if (typeof global === "undefined") {
        global = {};
    }
    if (typeof global.simsimi === "undefined") {
        global.simsimi = new Map();
    }
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;

    if (global.simsimi.has(threadID)) {
        if (senderID === api.getCurrentUserID() || body === "" || messageID === global.simsimi.get(threadID)) {
            return;
        }

        const { data, error } = await simsimi(body);
        if (error) {
            return;
        }

        if (!data.success) {
            api.sendMessage(data.error, threadID, messageID);
        } else {
            api.sendMessage(data.success, threadID, messageID);
        }
    }
}

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    const sendMessage = (message) => {
        api.sendMessage(message, threadID, messageID);
    };

    if (args.length === 0) {
        sendMessage("يجب عليك إدخال رسالة.");
        return;
    }

    switch (args[0]) {
        case "تشغيل":
            if (global.simsimi.has(threadID)) {
                sendMessage("لم تقم بإيقاف سمسم.");
            } else {
                global.simsimi.set(threadID, messageID);
                sendMessage("تم تشغيل سمسم.");
            }
            break;

        case "إيقاف":
            if (global.simsimi.has(threadID)) {
                global.simsimi.delete(threadID);
                sendMessage("تم إيقاف سمسم.");
            } else {
                sendMessage("لم تقم بتشغيل سمسم.");
            }
            break;

        default:
            const text = args.slice(0).join(" ");
            const { data, error } = await simsimi(text);
            if (error) {
                return;
            }

            if (!data.success) {
                sendMessage(data.error);
            } else {
                sendMessage(data.success);
            }
            break;
    }
};
