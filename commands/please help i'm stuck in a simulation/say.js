const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['parrot', 'copy'],
            group: 'unfun commands',
            memberName: 'say',
            description: 'what u want me 2 say?',
            clientPermissions: ['SEND_MESSAGES'],
            args: [
                {
                    key: 'text',
                    prompt: 't e x t',
                    type: 'string',
                    validate: text => text.length < 201,
                },
            ],
        });
    }

    run(message, { text }) {
        return message.say(text);
    }
};