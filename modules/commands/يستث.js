 module.exports.config = {
  name: "استثمار",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "يستثمر أموالك بنسبة عشوائية بين 5٪ و 15٪، مع فترة انتظار 1 ساعه.",
  commandCategory: "الاموال",
  usages: "",
  cooldowns: 3600  // 3 ساعات بالثواني (3 * 60 * 60)
};

module.exports.run = async function ({ api, event, Users, Currencies, args }) {
  const userId = event.senderID;
  const currentTime = Math.floor(Date.now() / 1000);

  // قم بجلب الوقت الأخير الذي تم فيه الاستثمار من قاعدة البيانات
  const lastInvestmentTime = (await Currencies.getData(userId)).lastInvestmentTime || 0;

  // احسب الفترة الزمنية المنقضية منذ الاستثمار السابق
  const timeElapsed = currentTime - lastInvestmentTime;

  if (timeElapsed < module.exports.config.cooldowns) {
      const remainingTime = module.exports.config.cooldowns - timeElapsed;
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
      return api.sendMessage(`يجب عليك الانتظار ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية قبل الاستثمار مرة أخرى.`, event.threadID);
  }

  const minPercentage = 5;
  const maxPercentage = 15;
  const randomPercentage = Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) + minPercentage;

  const investmentPercentage = randomPercentage / 100;

  const userMoney = (await Currencies.getData(userId)).money;
  const investmentAmount = Math.floor(userMoney * investmentPercentage);
  const newMoney = userMoney + investmentAmount;

  // تحديث الوقت الأخير للاستثمار في قاعدة البيانات
  await Currencies.setData(userId, { lastInvestmentTime: currentTime });

  await Currencies.increaseMoney(userId, investmentAmount);

return api.sendMessage(`تم الاستثمار بنجاح نسبة الربح :\n 『${investmentPercentage * 100}%』\n قدر الزيادة :\n 『${investmentAmount}』\n تم إضافتها إلى رصيدك رصيدك الان :\n 『${newMoney}』`, event.threadID);

};
