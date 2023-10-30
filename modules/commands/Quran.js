module.exports.config = {
    name: "قرأن",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "اعطيك ايه واعرف السوره",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const fs = require('fs');
const axios = require('axios');
const tempImageFilePath = __dirname + "/cache/qrin.mp3";

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 100);
        api.sendMessage(`تهانينا ${userName} لقد غرفت السوره وحصلت على 100 دولار`, event.threadID);

        api.unsendMessage(handleReply.messageID);
    } else {
        api.sendMessage(`خطأ، حاول مرة أخرى`, event.threadID);
    }

    fs.unlinkSync(tempImageFilePath);
};

module.exports.run = async function ({ api, event, args }) {
    const questions = [
      
      
      { image: "https://audio.jukehost.co.uk/QWYnnIcJ3OEz3FcB5sGKesNEtpm3ye61", answer: "العراق" },
     

    


    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;

    const imageResponse = await axios.get(randomQuestion.image, { responseType: "arraybuffer" });
    fs.writeFileSync(tempImageFilePath, Buffer.from(imageResponse.data, "binary"));

    const attachment = [fs.createReadStream(tempImageFilePath)];
    const message = `ما اسم السوره؟`;

    api.sendMessage({ body: message, attachment }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};
