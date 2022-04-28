module.exports.config = {
    name: "chuilientuc",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "JRT mod by DMH",
    description: "Chửi liên tục n lần",
    commandCategory: "general",
    usages: "tag",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"Alo con đĩ lồn kia " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("Mày chết mày với tao rồi", threadID), 2400)
 
setTimeout(() =>
api.sendMessage("Lắng cái lỗ tai lên nghe nè con chó", threadID), 3600)

var a = Math.floor(Math.random() * 0);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"D!t con mẹ mày " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Mày ra đây tao bảo " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Hiện hồn nhanh con chó " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Hiện hồn bố mày hỏi tội "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Mày trốn khi nào mới hiện hồn đây "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Con cặc đụ má mày làm sao "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Ngon mà ra đây chửi 1 - 1 với tao " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Con cặc địt mẹ mày "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Bố mày ỉa lên đầu mày nè con chó " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
setTimeout(() =>
api.sendMessage({
   body:"Bố mày bắn rap chết cụ mày giờ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 44000)
setTimeout(() =>
api.sendMessage({
   body:"Mày vẫn đéo dám ra à! " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 48000)
setTimeout(() =>
api.sendMessage({
   body:"Sao nay hèn vậy con chó " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 52000)
setTimeout(() =>
api.sendMessage({
   body:"Vậy thì xin mời nghe tao rap địt chết cả lò mày nha con " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 56000)
setTimeout(() =>
api.sendMessage({
   body:"Trước đó cho tao xin nghỉ 1p nhé " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 64000)
setTimeout(() =>
api.sendMessage({
   body:"Đầu tiên tao xin phép địt từ trên xuống dưới con " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 68000)
setTimeout(() =>
api.sendMessage({
   body:"Tao địt từ lỗ lồn đến lỗ nhị con lồn " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 72000)
setTimeout(() =>
api.sendMessage({
   body:"Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 76000)
setTimeout(() =>
api.sendMessage({
   body:"Tao mệt rồi đéo chửi nữa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 80000)
setTimeout(() =>
api.sendMessage({
   body:"Nào ông chủ update lyrics thì chửi tiếp nhé " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 84000)
setTimeout(() =>
api.sendMessage({
   body:"Cảm ơn bạn đã nghe mình chửi nha " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 88000)
setTimeout(() =>
api.sendMessage({
   body:"Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 92000)
setTimeout(() =>
api.sendMessage({
   body:"Chào tạm biệt 🥺 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 96000)
setTimeout(() =>
api.sendMessage({
   body:"Và không hẹn gặp lại nha con chó " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 100000)
}
}
// Text by Dương Minh Hoàng - do not clear this line & forget me !

  ////////   //         /////////       //         ////////   /////////
  //    //   //         //           //    //    //           //
  //   ///   //         //          //      //    ////        //
  ////////   //         /////////   //      //      ///       /////////
  //         //         //          //////////         ///    //
  //         //         //          //      //           //   //
  //         /////////  /////////   //      //   ////////     /////////  