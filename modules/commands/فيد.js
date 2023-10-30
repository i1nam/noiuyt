module.exports.config = {
  name: "فيديو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "فيديو من تيك توك",
  commandCategory: "خدمات",
  usages: "ا",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["فيديو قصير من اجلك"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382633703_6745657342187577_3958772140776710496_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeEnZ03K0yCQY0yoTY7KhSl0WJhgsl6FQn5YmGCyXoVCfvmETncxm5wPMGFPR1Qa6LYV18DuhlSPensDIB8XqfJN&_nc_ohc=VxZKVC4wm5AAX94G37w&_nc_ht=scontent.xx&oh=03_AdTaB0ZJSO7J31K0VSS7t6givxcRczFqXvr0MN-tKZwhiA&oe=652B5D40&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/358179533_6613437685371164_9003547868304586295_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=QU6wkpkBUC4AX_0xZWp&_nc_ht=scontent.xx&oh=03_AdTbKzctGrDMP30h1jXii8nToeIHTRJr-sAwYyFImqlytQ&oe=652AFBF1&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/386932719_5605901362868386_128721872076493820_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=yl8gA1Lpr-gAX8PiC9U&_nc_ht=scontent.xx&oh=03_AdTAHt-QxuxFFFyZbPc3nxMIUtajdXHQP7wc6Keynt7LJw&oe=652B6AE3&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/381965412_6836824409706967_5027328157963250790_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=lqZLLN0gHt0AX9RD1zq&_nc_ht=scontent.xx&oh=03_AdRRjgeK1sAv-s-NDYw1LCtPOsQEKaXlfJpQHipWllYYNQ&oe=652B82AA&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/385440010_6339403399505308_8838723619203344910_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=_fXaGWjCppwAX8txZpf&_nc_ht=scontent.xx&oh=03_AdSrTL5Lpmb6IPAP-Q-MHA4FYastjNXTXfHQ1J_KUyKuew&oe=652B6702&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382671956_24461194496801014_2727346445816494936_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=pwAFLRjlytkAX9x8XBn&_nc_ht=scontent.xx&oh=03_AdSafAmGpDEODiqNgXHmGgm8iemVz8dP8bvlLFBTjCz6nw&oe=652B55EA&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/381989764_6372990402823752_5700251433333637970_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=POBqwStzPWMAX-tWHzd&_nc_ht=scontent.xx&oh=03_AdSQXyeDqCSHrXGX3CzrZVI9xgfntqtXKoUUWcvUMMeNKw&oe=652B5439&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382629826_6781559601910683_2529390044773966851_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=aOJCzvO5zG4AX8AbDRh&_nc_ht=scontent.xx&oh=03_AdTCdW9gl_-lgdebikJObnLLmqJSQf6tmN6kEX_yNEd4CQ&oe=652B29B5&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382658696_7065984646747009_2140668965455881985_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=1xyaZ9TI0r0AX9-5mXJ&_nc_ht=scontent.xx&oh=03_AdSgCuTW6HYBb6cw3Ac48BjUfwvtB-xJNmoClR32ftdynA&oe=652B66D1&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382636255_6579097702186579_2425947806144785734_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=vZJBEZGj7nYAX9fyx0J&_nc_ht=scontent.xx&oh=03_AdQ7auCdUPVMO2oktawHS3ADeOPWm95xL6bAWLpqPlUYmg&oe=652B0011&dl=1",
    "https://scontent.xx.fbcdn.net/v/t42.3356-2/382677297_6847657041951657_2012109361059928336_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=KpYTuTjH-JYAX_Mvxnk&_nc_ht=scontent.xx&oh=03_AdTwqj5dA9V6dL4WODtKYnS0Y8diVva2n3usSpkilNTSHw&oe=652B7FFF&dl=1",

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };