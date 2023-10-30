module.exports.config = {
	name: "صراحة",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "عمر",
	description: "البوت يسئلك اسئله صراحه عشوائيه",
	commandCategory: "ترفية",
	usages: "ا",
	cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = [


      
      "صراحه  |  صوتك حلوة؟",
    "صراحه  |  التقيت الناس مع وجوهين؟",
    "صراحه  |  شيء وكنت تحقق اللسان؟",
    "صراحه  |  أنا شخص ضعيف عندما؟",
    "صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
    "صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟",
    "صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
    "صراحه  |  كيفية الكشف عن من يكمن عليك؟",
    "صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
    "صراحه  |  أشجع شيء حلو في حياتك؟",
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    "صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
    "صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟",
    "صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟",
    "صراحه  |  نظرة و يفسد الصداقة؟",
    "صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
    "صراحه  |  شخص معك بالحلوه والمُره؟",
    "صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
    "صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
    "صراحه  |  وش تتمنى الناس تعرف عليك؟",
    "صراحه  |  ابيع المجرة عشان؟",
    "صراحه  |  أحيانا احس ان الناس ، كمل؟",
    "صراحه  |  مع مين ودك تنام اليوم؟",
    "صراحه  |  صدفة العمر الحلوة هي اني؟",
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    "صراحه  |  صفة تحبها في نفسك؟",
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    "صراحه  |  تصلي صلواتك الخمس كلها؟",
    "صراحه  |  ‏تجامل أحد على راحتك؟",
    "صراحه  |  اشجع شيء سويتة بحياتك؟",
    "صراحه  |  وش ناوي تسوي اليوم؟",
    "صراحه  |  وش شعورك لما تشوف المطر؟",
    "صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟",
    "صراحه  |  ما اكثر شي ندمن عليه؟",
    "صراحه  |  اي الدول تتمنى ان تزورها؟",
    "صراحه  |  متى اخر مره بكيت؟",
    "صراحه  |  تقيم حظك ؟ من عشره؟",
    "صراحه  |  هل تعتقد ان حظك سيئ؟",
    "صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟",
    "صراحه  |  كلمة تود سماعها كل يوم؟",
    "صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟",
    "صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
    "صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
    "صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟",
    "‏صراحه | هل جرحت شخص تحبه من قبل ؟",
    "صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟",
    "‏صراحه | هل تحب عائلتك ام تكرههم؟",
    "‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
    "‏صراحه  |  هل خجلت من نفسك من قبل؟",
    "‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
    "‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟",
    "‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
    "‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟",
    "‏صراحه  |  ماذا تختار حبيبك أم صديقك؟",
    "‏صراحه  | هل حياتك سعيدة أم حزينة؟",
    "صراحه  |  ما هي أجمل سنة عشتها بحياتك؟",
    "‏صراحه  |  ما هو عمرك الحقيقي؟",
    "‏صراحه  |  ما اكثر شي ندمن عليه؟",
    "صراحه  |  ما هي أمنياتك المُستقبلية؟‏",
    "صراحه | نفسك فـ ايه ؟",
    "صراحه | هل تحب فتاه او احببت من قبل ؟",
    "صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟",
    "صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟",
    "صراحه | هل تحب مدرستك ؟",
    "صراحه | ما الشئ الذي تتمني ان يحصل ؟",
   "صراحه | هل تحب عائلتك ؟",

  " صراحة  |  هل كنت تحب ندى ? ",
  

];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};