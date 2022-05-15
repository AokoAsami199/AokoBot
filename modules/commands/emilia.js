module.exports.config = {
	name: "emilia", 
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HieuHapHoi", 
	description: "My Waifu",
	commandCategory: "IMAGE",
	usages: "loli",
	cooldowns: 5, 
};

module.exports.run = async function({ api, event }) {
	
	const axios = require("axios");
	const res = await axios.get("https://randomlinkapi.do-giagia1.repl.co/emiliaimage");
	const request = require("request");
	const fs = require("fs");

    let image = res.data.url;

	let callback = function(){
        api.sendMessage({
			body: `───EMILIA───\n» Ảnh emilia của bạn đây:`,
			attachment: fs.createReadStream(__dirname + `/cache/emilia.jpg`)
		  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/emilia.jpg`), event.messageID);
    }

    request(image).pipe(fs.createWriteStream(__dirname + `/cache/emilia.jpg`)).on("close", callback);

}