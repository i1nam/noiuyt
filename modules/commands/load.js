module.exports.config = {
	name: "اعاده",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "عمر",
	description: " ",
	commandCategory: "المطور",
	usages: "[]",
	cooldowns: 3
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
    const permission = ["100081570534647"]
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية حب", event.threadID, event.messageID);
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("لود كونفج", event.threadID, event.messageID);    
}
