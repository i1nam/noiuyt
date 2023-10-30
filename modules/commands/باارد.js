const axios = require("axios");

module.exports.config = {
    name: "سيستا",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "سؤال الذكاء الاسطناعي قوقل بارد",
    commandCategory: "خدمات",
    usages: "[سؤال]",
    cooldowns: 5,
};
 
module.exports.run = async function({ api, event, args }) {
    let { threadID, messageID, body } = event;
    const content = encodeURIComponent(args.join(" "));
    
    if (!args[0]) return api.sendMessage("عيون سيستا امرك", threadID, messageID);
    
    try {
        const res = await axios.get(`https://bard-api.khyryslh2.repl.co/khir/${content}`);
        const respond = res.data.answer;
        
        if (res.data.error) {
            api.sendMessage("خطأ: " + res.data.error, threadID, messageID);
        } else {
            const word1 = "بارد";
            const word2 = "Bard";
            const word3 = "Google";
            const replacement1 = "سيستا";
            const replacement2 = "سيستا";
            const replacement3 = "Siesta";

            const newRespond = respond
              .replace(word1, replacement1)
              .replace(word2, replacement2)
              .replace(word3, replacement3);
              
            api.sendMessage(newRespond, threadID, messageID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("خلص توكن ال api حاول بعدين ❌", threadID, messageID);
    }
};
