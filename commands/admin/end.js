const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'end',
			group: 'admin',
			memberName: 'end',
			description: '"die, die, die!" - reaper',
			examples: ['end'],
            ownerOnly: true
		});
	}
	async run(msg) {
		msg.reply('going down now!').then(value => {
			process.exit()
		});
    };
};