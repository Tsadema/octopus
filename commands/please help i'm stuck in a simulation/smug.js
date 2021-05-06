const { Command } = require("discord.js-commando")
const fs = require("fs");

module.exports = class SmugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'smug',
			group: 'please help i\'m stuck in a simulation',
			memberName: 'smug',
			description: 'Sends a smug face from an online database. Spooky!'
		});
	}
	async run(message, args) {
		message.delete()
			.catch(console.error);
		var imgNo = Math.floor(Math.random() * 58) + 1;
		message.say("http://smug.moe/smg/" + imgNo + ".png")
	}
}
