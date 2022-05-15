module.exports.config = {
	name: "rankup",
	version: "1.0.2",
	hasPermssion: 1,
	credits: "Mirai Team mod by 723",
	description: "Thông báo rankup random gif cho từng nhóm, người dùng",
	commandCategory: "system",
	dependencies: {
		"fs-extra": ""
	},
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 5
	}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/rankup/`;// Thư mục dow về
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "rankup1.gif")) request /*kiem tra file neu k co tu dong down ve */ 
    ("https://i.imgur.com/QrdwCAa.gif").pipe(fs.createWriteStream(dirMaterial + "rankup1.gif")); //link file & ten file khi luu ve
    if (!fs.existsSync(dirMaterial + "rankup2.gif")) request /*kiem tra file neu k co tu dong down ve */ 
    ("https://i.imgur.com/jFo6mha.gif").pipe(fs.createWriteStream(dirMaterial + "rankup2.gif")); //link file & ten file khi luu ve
    if (!fs.existsSync(dirMaterial + "rankup3.gif")) request /*kiem tra file neu k co tu dong down ve */ 
    ("https://i.imgur.com/RioclTB.gif").pipe(fs.createWriteStream(dirMaterial + "rankup3.gif")); //link file & ten file khi luu ve
}
// Có sẵn hàm dowload cho newbie không biết thêm gif
module.exports.handleEvent = async function({ api, event, Currencies, Users, getText }) {
	var {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];

	threadID = String(threadID);
	senderID = String(senderID);

	const thread = global.data.threadData.get(threadID) || {};

	let exp = (await Currencies.getData(senderID)).exp;
	exp = exp += 1;

	if (isNaN(exp)) return;

	if (typeof thread["rankup"] != "undefined" && thread["rankup"] == false) {
		await Currencies.setData(senderID, { exp });
		return;
	};

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

	if (level > curLevel && level != 1) {
		const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
		var messsage = (typeof thread.customRankup == "undefined") ? msg = getText("levelup") : msg = thread.customRankup,
			arrayContent;

		messsage = messsage
			.replace(/\{name}/g, name)
			.replace(/\{level}/g, level);
let random = Math.floor(Math.random() * 3) + 1;//random gif , có bao nhiêu thay sau dấu * bấy nhiêu . Thêm gif và đổi tên thành rankup1/2/3.gif
		if (existsSync(__dirname + "/cache/rankup/")) mkdirSync(__dirname + "/cache/rankup/", { recursive: true });
		if (existsSync(__dirname + `/cache/rankup/rankup${random}.gif`)) arrayContent = { body: messsage, attachment: createReadStream(__dirname + `/cache/rankup/rankup${random}.gif`), mentions: [{ tag: name, id: senderID }] };
		else arrayContent = { body: messsage, mentions: [{ tag: name, id: senderID }] };
		const moduleName = this.config.name;
		api.sendMessage(arrayContent, threadID, async function (error, info){
			if (global.configModule[moduleName].autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, global.configModule[moduleName].unsendMessageAfter * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	await Currencies.setData(senderID, { exp });
	return;
}

module.exports.languages = {
	"vi": {
		"off": "tắt",
		"on": "bật",
		"successText": "thành công thông báo rankup!",
		"levelup": "𝓛𝓮𝓿𝓮𝓵 𝓬𝓪̀𝓸 𝓹𝓱𝓲́𝓶 𝓬𝓾̉𝓪 {name} đ𝓪̃ đ𝓪̣𝓽 𝓽𝓸̛́𝓲 đ𝓲̉𝓷𝓱 𝓬𝓪𝓸 𝓵𝓮𝓿𝓮𝓵 {level}"
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success notification rankup!",
		"levelup": "{name}, your keyboard hero level has reached level {level}",
	}
}

module.exports.run = async function({ api, event, Threads, getText }) {
	const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;
	
	if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
	else data["rankup"] = false;
	
	await Threads.setData(threadID, { data });
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["rankup"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
}