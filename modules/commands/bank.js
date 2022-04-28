    const laisuat = 0.005
    const timeIM = 12000
    module.exports.config = {
        name: "bank",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "AokoAsami199",
        description: "",
        commandCategory: "Coins",
        usages: "",
        cooldowns: 5,
        };
    module.exports.onLoad = () => {
        const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const pathData = join(__dirname, "cache", "nganhang.json");
        if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
    }
    module.exports.run = async ({ event, api, Currencies, args, Users }) => {
      const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");    
  console.log(timeNow)
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
    const { threadID, messageID, senderID } = event;
    const { readFileSync, writeFileSync } = require("fs-extra");
    const { join } = require("path")
    const pathData = join(__dirname, "cache", "nganhang.json");
    const user = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var userData = dataJson.find(item => item.senderID == senderID) || { senderID: senderID,  money: 0 };
    const moneyInput = parseInt(args[1])
    if(args[0] == '-r' || args[0] == 'register') {
        if (!dataJson.some(i => i.senderID == senderID)) {
        dataJson.push(userData);
        writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
        return api.sendMessage(`[ SUCCESS ] » Bạn đã đăng kí thành công, gửi ít nhất 200$ để có lãi💰`, threadID, messageID)
        }
    else return api.sendMessage(`[ WARNING ] » Bạn đã có tài khoản trên hệ thống MIRAI Bank🏦`, threadID, messageID)
    }
    if(args[0] == 'check' || args[0] == 'coins') {
    if (dataJson.some(i => i.senderID == senderID) == false) return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí🏦', threadID, messageID)
        else { 
        
        var userMoney = userData.money;
        return api.sendMessage(`[ SUCCESS ] » Số tiền bạn đang gửi MIRAI Bank là: ${userMoney}$\n💷 Lãi: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
        }
    } 
    if(args[0] == 'gửi' || args[0] == 'send') {
    if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ WARNING ] » Số tiền cần gửi phải là 1 con số và lớn hơn 50$💰", threadID, messageID);
    if (!dataJson.some(i => i.senderID == senderID)) {
        return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí💰', threadID, messageID)
    }
    else { 
        console.log(userData);
        console.log(userData.money)
        const moneyy = (await Currencies.getData(senderID)).money;
        if(moneyy < moneyInput) return api.sendMessage(`[ WARNING ] » Số dư không đủ ${moneyInput} để gửi vào MIRAI Bank💰 `, threadID, messageID)
        var money = userData.money;
        userData.money = parseInt(money) + parseInt(moneyInput);
        writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
        await Currencies.decreaseMoney(event.senderID, parseInt(moneyInput))
        
        return api.sendMessage(`[ SUCCESS ] » Bạn đã gửi ${moneyInput}$ vào Aoko Bank\n💷 Lãi: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
        }
    }
    if(args[0] == 'rút' || args[0] == 'lấy') { 
        if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ WARNING ] » Số tiền cần rút phải là 1 con số và lớn hơn 50$", threadID, messageID);
        if (!dataJson.some(i => i.senderID == senderID)) {
        return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí', threadID, messageID)
        }
    else {  
        
        var money = userData.money;
        if(parseInt(money) < parseInt(moneyInput)) return api.sendMessage('[ WARNING ] » Số dư của bạn không đủ để thực hiện giao dịch này!', threadID, messageID)
        else {
            await Currencies.increaseMoney(event.senderID, parseInt(moneyInput))
            userData.money = parseInt(money) - parseInt(moneyInput)
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            return api.sendMessage(`[ SUCCESS ] » Rút thành công ${parseInt(moneyInput)}$, số dư còn lại là ${parseInt(money) - parseInt(moneyInput)}$`, threadID, messageID)
        }
        }
    }

    else return api.sendMessage(`=====🏦MIRAI BANK🏦=====\n\n[-r/register] - Đăng kí gửi tiền tại MIRAI Bank💹\n[check/coins] - Xem số tiền trong MIRAI Bank💳\n[gửi/send] - Gửi tiền vào MIRAI Bank💷\n[rút] - Rút tiền từ MIRAI Bank💰\n\n💲 Lãi suất hiện tại: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
    }
async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/cache/nganhang.json');
const user = require('./cache/nganhang.json');

	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat ))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	console.log("DANG XU LI BANKING");
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}