const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			group: 'unfun commands',
			memberName: 'invite',
			description: 'Displays bot invite link.',
			examples: ['invite'],
		});
	}
	async run(message) {
		return message.say('invite link: https://bit.ly/octopus8')
	}
};