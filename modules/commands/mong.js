module.exports.config = {
	name:"gai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hải mod 🐧 - api ảnh của chinhle 🌚",
	description: "Random ảnh ghệ đic pư",
	commandCategory: "media",
	cooldowns: 3
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apitaoa-1.chinhle4447.repl.co/v1/gai').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `《Ghệ đic pự》`,
						attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
			})
}