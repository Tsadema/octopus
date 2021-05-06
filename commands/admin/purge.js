const {
	Command
} = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			group: 'admin',
			memberName: 'purge',
			description: 'Purges the amount of messages you ask for.',
			examples: ['purge 4'],
            ownerOnly: true,
			args: [{
				key: 'text',
				prompt: 'How many messages would you like to purge?',
				type: 'string'
			}]
		});
	}

	async run(msg, args) {
				let messagecount = args.text;
				if (messagecount <= 2) return msg.reply('You can not delete less than 2 messages!')
				if (messagecount > 10000) {
					return msg.reply('You can not delete more than 10000 messages at a time!')
				}
				if (messagecount > 100) {
					messagecount = messagecount / 100;
					for (var i = 0; i < messagecount; i++) {
						msg.channel.fetchMessages({
							limit: 100
						}).then(messages => msg.channel.bulkDelete(messages))
					}
					msg.reply(`Succesfully deleted ${messagecount * 100} messages!`);
				} else {
					msg.delete();
					msg.channel.fetchMessages({
						limit: messagecount
					}).then(messages => msg.channel.bulkDelete(messages))
					msg.reply(`Succesfully deleted ${messagecount} messages!`);
				}
			}
};
		return
