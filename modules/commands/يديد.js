module.exports.config = {
    name: "هايو",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "عمر",
    description: " ",
    commandCategory: "ترفية",
    usages: "[ا]",
    cooldowns: 5,

}

module.exports.handleEvent = async function ({ api, event, args, message, }) {


    api.setOptions({ listenEvents: true });

    const riddles = [
     
      {
        question: "ما هو الشيء الذي يكسر بكلمة؟",
        answer: "الصمت"
      },
      {
        question: "ما هو الحيوان الذي يستطيع رؤية خلفه؟",
        answer: "السمكة"
      },

    ];

    var stopListening = api.listenMqtt((err, event) => {
      if (err) return console.error(err);

      api.markAsRead(event.threadID, (err) => {
        if (err) console.error(err);
      });

      if (event.type === "message") {
        if (event.body === "هايو") {

          this.currentRiddleIndex = Math.floor(Math.random() * riddles.length);
          message.send(riddles[this.currentRiddleIndex].question);
        } else if (this.currentRiddleIndex !== -1) {

          if (event.body === riddles[this.currentRiddleIndex].answer) {
            message.send("إجابة صحيحة!");
            this.currentRiddleIndex = -1; 
            stopListening(); 
          } 


        }
      }
    });
  },
};
