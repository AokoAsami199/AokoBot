module.exports.config = {
	name:"mong",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Toàn",
	description: "Random video tiktok kênh snauzk",
	commandCategory: "media",
	cooldowns: 3
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://randomlinkapi-1.toan1511.repl.co/getLink1').then(res => {//https://randomlinkapi-1.toan1511.repl.co/getLink1
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({ body: `bổ mắt nhé`,
						attachment: fs.createReadStream(__dirname + `/cache/a.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/a.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/a.${ext}`)).on("close", callback);
			})
}