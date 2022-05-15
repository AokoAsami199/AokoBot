module.exports.config = {
	name: "kurumi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "đù",
	description: "",
	commandCategory: "Random-image",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
   if (1000 > moneyUser) return api.sendMessage("Bạn cần 5000$ để xem ảnh?", event.threadID, event.messageID);const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 const t =[ 
    "Tên tôi là Kurumi Tokisaki ... Tôi là một linh hồn",
    "Bạn đã sẵn sàng để giết một sinh vật khác, nhưng bạn sợ chết?.",
   " Bạn không nghĩ nó có gì lạ",
   "sao? Khi bạn nhắm vào một cuộc sống khác, đây là những gì xảy ra",
   "30 năm trước, Thần đầu tiên là nguồn gốc của mọi linh hồn.","Ý định của tôi là giết anh ta",
   "Ngay cả đối với bạn, rơi vào địa ngục là không đủ"  ];
	axios.get('http://apikurumi.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
     Currencies.setData(event.senderID, options = {money: money - 1000})
	let callback = function () {
    api.sendMessage({body:`${t[Math.floor(Math.random() * t.length)]}`,
						attachment: fs.createReadStream(__dirname + `/cache/hinhanh.${ext}`)
        },event.threadID, (err, info) =>
        setTimeout(() => {
    api.unsendMessage(info.messageID) } , 300000));}
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hinhanh.${ext}`)).on("close", callback);
})}
                      