const { Command } = require('discord.js-commando');

module.exports = class WhoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'who',
			group: 'please help i\'m stuck in a simulation',
			memberName: 'who',
			description: 'Ask question and receive a random answer.',
			examples: ['who will get married in their lifetime?'],

			args: [{
				key: 'question',
				prompt: 'ask me a question! Don\'t be shy...',
				type: 'string'
			}]
		});
	}

	async run(msg, args) {
		const random = msg.channel.guild.members.filter(member => member.presence.status === 'online').random().user;
		return msg.channel.sendMessage(`${msg.author} asked who ${args.question}: The answer is ${random.username}!`);
	}
};
