const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			group: 'please help i\'m stuck in a simulation',
			memberName: 'invite',
			description: 'Displays bot invite link.',
			examples: ['invite'],
		});
	}
	async run(message) {
		return message.say('invite link: https://bit.ly/octopus8')
	}
};