module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "NSFW",
  usages: "mv",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các video hiện có  🎭 \n\n1. mv gái \n2. mv sex\n\nDùng #mv  < video bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "gái") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 300) {
  axios.get('https://jrt-api.j-jrt-official.repl.co/videogaixinh').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video gái xinh nè <3\n-300 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 300})
      })
  } else return api.sendMessage("Bạn cần 300 đô",event.threadID,event.messageID);
  }
    if (args[0] == "sex") {
      if (event.senderID != 30029198175178) return api.sendMessage(`[❗] Không phải mở NSFW rồi xem gì xem đâu =))`, event.threadID, event.messageID)
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 300) {
  axios.get('https://jrt-api.j-jrt-official.repl.co/videosex').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video sex nè <3\n-300 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 300})
      })
  } else return api.sendMessage("Bạn cần 300 đô",event.threadID,event.messageID);
  }
}