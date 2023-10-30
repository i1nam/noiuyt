module.exports.config = {
	name: "تبديل",
	version: "1.0.0",
	credits: "عمر",
	description: "",
	usages: "تبديل الاموال الى نقاط والعكس",
    commandCategory: "الاموال",
	cooldowns: 0,
	dependencies: {
        "fs-extra" : ""
    }
};
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"];

	if (!fs.existsSync(__dirname + "/cache/bill.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/bill.json", JSON.stringify(requestList));
	}
}
module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if (handleReply.author != event.senderID) return;
    var data = await Currencies.getData(handleReply.author);
    var exp =  data.exp;
    var money = data.money
    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth() + 1 )+'/'+d.getFullYear();
	var time = d.getHours() + ":" + d.getMinutes();
    switch (handleReply.type) {
        case "banking": {
            switch (event.body) {
                case "1": {
                    return api.sendMessage(
                        "رد على هذه الرسالة بعدد الدولارات التي تريد تبديلها ألى  نقاط.\n ملاحظة : كل 10 دولار = 1 نقطة"
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);
                } 
                case "2": {
                    return api.sendMessage(
                        "رد على هذة الرسالة بعدد النقاط التي تريد تبديلها ألى  رصيد.\n ملاحظة : كل 5 نقاط = 1 دولار"
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "exp"
                      });
                  }, event.messageID);
                }
                default:
                    break;
            }
            return;
          }
          case "exp": {
            var content = event.body;
            if(content > exp) api.sendMessage("شني ، ماعدك نقاط ؟ روح اتفاعل بالمجموعة",event.threadID,event.messageID)
            else 
            {
            await Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
            var exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
            await Currencies.setData(handleReply.author, { exp })
            var msg = `💸تم تبديل بنجاح !\nالوقت: ${date}\nالتفاصيل:  تم تبديل ${content} نقاط ألى ${content / 5} رصيد.`
            api.sendMessage(msg,handleReply.author);
            const suggest = msg;
            getData.push(suggest);
            api.sendMessage("تم حفظ معاملتك على النظام !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
          
            }
          break;
       }
       case "money": {
        var content = event.body;
        if(content > money) api.sendMessage("ماعدك رصيد ؟ اشتغل وتعال !",event.threadID,event.messageID)
        else 
        {
            await Currencies.increaseMoney(event.senderID, parseInt("-"+content))
        var exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
        await Currencies.setData(handleReply.author, { exp })
        var msg = `💸تم تبديل بنجاح !\nالوقت: ${date}\nالتفاصيل: تم تبديل ${content} دولار ألى ${content / 10} نقاط.`
        api.sendMessage(msg,handleReply.author);
        const suggest = msg;
        getData.push(suggest);
        api.sendMessage("تم حفظ معاملتك في النظام!",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
      
        }
      break;
   }
      }
    }
module.exports.run = async function({ api, event, args }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if(!args[0])return api.sendMessage(
                "◆━━◆ 🏛 بنك سيستا ◆━━◆" +
                "\n» الرجاء إدخال اختيارك «" +
                "\n\n1. تبديل الرصيد إلى نقاط ❄️." +
                "\n2. تبديل النقاط إلى رصيد 💦." +
                "" +
                "\n\n» يرجى الرد على الرسالة والاختيار حسب الرقم «"
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "banking"
                });
            }, event.messageID);
     
    if (args[0] == "check") {
        var workList = "";
			getData.map(item => workList += `\n ${item}`);
			return api.sendMessage(`${workList}`, event.threadID, event.messageID);
		}
        
  }