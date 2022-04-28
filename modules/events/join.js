module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`「 ${global.config.PREFIX} 」 • ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 !`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/joinbox.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🌺𝑪𝒉𝒂̀𝒐 𝒎𝒖̛̀𝒏𝒈 𝒄𝒐𝒏 𝒗𝒐̛̣ {name} 🐸\n𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 {threadName} .\n{type} 𝒍𝒂̀ 𝒕𝒉𝒂̀𝒏𝒉 𝒗𝒊𝒆̂𝒏 𝒕𝒉𝒖̛́ {soThanhVien} 𝒄𝒖̉𝒂 𝒏𝒉𝒐́𝒎💗 𝑻𝒖̛𝒐̛𝒏𝒈 𝒕𝒂́𝒄 𝒏𝒉𝒊𝒆̂̀𝒖 𝒗𝒂̀𝒐 𝒏𝒉𝒆́ 𝒌𝒉𝒐̂𝒏𝒈 𝒍𝒂̀ 𝒃𝒊̣ 𝒔𝒖́𝒕 𝒌𝒉𝒐̉𝒊 𝒏𝒉𝒐́𝒎 𝒏𝒉𝒐𝒂 🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
