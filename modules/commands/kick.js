module.exports.config = {
	name: "طرد",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "عمر",
	description: "اشر إلى الشخص الذي تريد إزالته من المجموعة حسب العلامة",
	commandCategory: "مسؤولي المجموعات", 
	usages: "[منشن]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
		"needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
		"missingTag": "Bạn phải tag người cần kick"
	},
	"en": {
		"error": "خطأ! حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق!",
		"needPermssion": "احتاج ادمن في المجموعة\nالرجاء الإضافة والمحاولة مرة أخرى!",
		"missingTag": "أنت بحاجة إلى الاشارة لشخص الذي تريد طرده"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("لازمك ماسنجر وتمنشن ",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}