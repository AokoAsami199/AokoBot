module.exports.config = {
	name:"girlxinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random ảnh girl theo api",
	commandCategory: "system",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apiquyenkaneki.herokuapp.com/gai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `《Gái nè húp đi em》`,
						attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
			})
}