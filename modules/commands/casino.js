module.exports.config = {
	name: "casino",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "Chơi tài xỉu",
	commandCategory: "Game",
	usages: "",
	cooldowns: 0
};	
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   
   const request = require('request');
   const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  const choose = args[0];
  const kqua = args[1];
  const tiencuoc = args[2];
  if (!existsSync(__dirname + '/cache/casio.jpg')) {
        request('https://raw.githubusercontent.com/tdunguwu/key/main/roulette.jpg').pipe(createWriteStream(__dirname + '/cache/casio.jpg'));
      }
  if(!choose){
    var msg =  {body: `[ CỜ BẠC ]\n=> 1.Tài Xỉu\n=> 2.Chẵn Lẻ\n=> 3.Lô Đề\n=> 4.Hiệu Số\n=> 5.Bầu Cua\n=> 6.Slot\nReply tin nhắn này để xem hướng dẫn cách chơi`, attachment : [
      require("fs").createReadStream(__dirname + "/cache/casio.jpg")
    ]}
   return api.sendMessage(msg,  threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: senderID,
                messageID: info.messageID
            });
        })
  }
  const z = Math.floor(Math.random() * 20);
      const y = Math.floor(Math.random() * 20);
      const dap_an = y - z;
  const x = Math.floor(Math.random() * 100);
  const typ2 = ['chẵn', 'lẻ'];
  const random2 = typ2[Math.floor(Math.random() * typ2.length)];
   var chan = [ 0, 2, 4, 6, 8];
    var le =[1, 3, 5, 7, 9];
    if (random2 == 'chẵn') {
    var defl_number2 = chan[Math.floor(Math.random() * chan.length)];
  }
  if (random2 == 'lẻ') {
    var defl_number2 = le[Math.floor(Math.random() * le.length)];
  }
  const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
   var tai = [4,5,6,7,8,9,10];
    var xiu =[11,12,13,14,15,16,17];
    if (random == 'tài') {
    var defl_number = tai[Math.floor(Math.random() * tai.length)];
  }
  if (random == 'xỉu') {
    var defl_number = xiu[Math.floor(Math.random() * xiu.length)];
  }
  if (choose == 'tài' || choose == 'xỉu') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
if (choose == random) {
  	await Currencies.increaseMoney(senderID, parseInt(kqua * 2));
  return api.sendMessage(`bạn thắng bot lắc ra ${random} ${defl_number} và nhận được ${kqua * 2}`,event.threadID, event.messageID)
} else {
  await Currencies.decreaseMoney(senderID, parseInt(kqua ));
      return api.sendMessage(`bạn thua bot lắc ra ${random} ${defl_number} và mất ${kqua}`,event.threadID, event.messageID)}
 }
 if (choose == 'lẻ' || choose == 'chẵn') {
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
   if (choose == random2) {
      await Currencies.increaseMoney(senderID, parseInt(kqua * 2 ));
  return api.sendMessage(`bạn thắng bot lắc ra ${random2} ${defl_number2} và nhận được ${kqua * 2}`,event.threadID, event.messageID)
} else {
   await Currencies.decreaseMoney(senderID, parseInt(kqua ));
  return api.sendMessage(`bạn thua bot lắc ra ${random2} ${defl_number2} và mất trắng số tiền ${kqua}`,event.threadID, event.messageID)}
  }
  if (choose == 'lode' || choose == 'lô' || choose == 'đề') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
    api.sendMessage(`vui lòng đợi kết quả lô đề sau ít phút hehe`, event.threadID, async (err, info) => {
      await new Promise(resolve => setTimeout(resolve, 120 * 1000));
      api.unsendMessage(info.messageID)
 if(kqua == x){
    await Currencies.inreaseMoney(senderID, parseInt(kqua * 2));
   return api.sendMessage(`bạn đã thắng vì chọn ${args[1]} và kết quả lô hôm nay trên đài của bot là ${x} thần may mắn đã độ bạn và nhận được số tiền là ${kqua * 2} ehehe`, threadID, messageID)
 } else {
    await Currencies.decreaseMoney(senderID, parseInt(kqua ));
return api.sendMessage(`bạn đã thua vì chọn ${args[1]} và kết quả lô hôm nay trên đài của bot là ${x} hjx thần may mắn quên bạn rồi và mất số tiền là ${kqua}`, threadID, messageID)
 }
    }
    )}
    if (choose == 'hieu' || choose == 'Hieu' || choose == 'Hiệu') { 
      if(isNaN(kqua)){return api.sendMessage('nqu', threadID, messageID)}
   if(kqua == dap_an){  
      await Currencies.increaseMoney(senderID, parseInt(tiencuoc * 2));
  return api.sendMessage(`bạn thắng bạn chọn là: ${kqua}\nsố thứ nhất bot chọn là: ${z}\nsố thứ nhất bot chọn là: ${y}\nhiệu số là ${dap_an} và bạn nhận được số tiền là ${tiencuoc * 2}`,threadID, messageID)} else {
     await Currencies.decreaseMoney(senderID, parseInt(tiencuoc  ));
  return api.sendMessage(`bạn thua bạn chọn là: ${kqua}\nsố thứ nhất bot chọn là: ${z}\nsố thứ nhất bot chọn là: ${y}\nhiệu số là ${dap_an} và mất số tiền là ${tiencuoc}`,threadID, messageID)
  }
    }
  if (choose == 'baucua') {
  const slotItems = ["🍐", "🦀", "🐟", "🦌", "🐓", "🦞"];
        const moneyUser = (await Currencies.getData(event.senderID)).money;
            var moneyBet = parseInt(args[2]);
                if (!args[1] || !isNaN(args[1])) return api.sendMessage("Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
	        if (moneyBet > moneyUser) return api.sendMessage("Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	    if (moneyBet < 1000) return api.sendMessage("Số tiền đặt không được dưới 1000 đô!", event.threadID, event.messageID);
    var number = [], win = false;
for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
    var itemm;
        switch (args[1]) {
            case "bầu":
                case "Bầu": itemm = "🍐";
                    break;
            case "cua": 
                case "Cua": itemm = "🦀";
                    break;
            case "cá":
                case "Cá": itemm = "🐟";
                    break;
            case "nai":
                case "Nai": itemm = "🦌";
                    break;
            case "gà": 
                case "Gà": itemm = "🐓";
                    break;
            case "tôm":
                case "Tôm": itemm = "🦞";
                    break;
                        default: return api.sendMessage(" Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
        }
    api.sendMessage("chờ tớ quay cái nha UwU",event.threadID, event.messageID);
await new Promise(resolve => setTimeout(resolve, 3 * 1000));
var array = [number[0],number[1],number[2]];
    if (array.includes(itemm)) {
        var i = 0;
            if (array[0] == itemm) i+=1;
                if (array[1] == itemm) i+=1;
            if (array[2] == itemm) i+=1;
        if (i == 1) {
            var mon = parseInt(args[1]) + 300; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 1 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 2) {
            var mon = parseInt(args[1]) * 2; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 2 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 3) {
            var mon = parseInt(args[1]) * 3; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 3 ${itemm}!`,event.threadID, event.messageID);
        }
        else return api.sendMessage("Lỗi ! Code : XX1N",event.threadID,event.messageID);
    } else  {
        await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
           return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Trừ ${args[1]} Đô,Vì Có 0 ${itemm}!`,event.threadID, event.messageID);
 }
   }
 if (choose == 'slot') { 
   const slotItems = ["🍇", "🍉", "🍊", "🍏", "🥭", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`🎰 ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} 🎰\nBạn đã thắng`, event.threadID, event.messageID);
           
            break;
        }
        case false: {
            api.sendMessage(`🎰 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} « 🎰\nBạn đã thua`, event.threadID, event.messageID);
           
            break;
        }
    }
 }

}


 module.exports.handleReply = async function ({
    args, event, Users, api, handleReply, Currencies
}) {
  const { threadID, messageID } = event;
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage("cút mẹ mày đi", event.threadID, event.messageID); 
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": { 
          return api.sendMessage(`địt mẹ thế cũng phải chỉ cứ dùng ${global.config.PREFIX}casino [ TÀI OR XỈU ]`, threadID, messageID )
        }
        case "2": { 
          return api.sendMessage(`địt mẹ thế cũng phải chỉ cứ dùng ${global.config.PREFIX}casino [ Chẵn OR Lẻ ]`, threadID, messageID )
        }
        case "3": { 
          return api.sendMessage(`địt mẹ thế cũng phải chỉ cứ dùng ${global.config.PREFIX}casino [ Lode Or Lô Or Đề ] [ Số Mà Bạn Tin Tưởng ]`, threadID, messageID )
        }
        case "4": {
          return api.sendMessage(`địt mẹ thế cũng phải chỉ cứ dùng ${global.config.PREFIX}casino [ hieu Or Hiệu Or Hieu ] [ Số Mà Bạn Tin Tưởng ]`, event.threadID, event.messageID )            }
         case "5": {
          return api.sendMessage(`địt mẹ thế cũng phải chỉ cứ dùng ${global.config.PREFIX}casino [ Baucua ] [ Bầu, cua, cá, nai, gà, tôm ] [ Số tiền cần đặt cược ]`, event.threadID, event.messageID )}
        }
    }
    }
}
