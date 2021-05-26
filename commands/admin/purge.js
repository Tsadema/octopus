const commando = require('discord.js-commando');

module.exports = class PurgeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'if message = stupid: message.delete()',
            examples: ['purge 5'],

            args: [
                {
                    key: 'numToPurge',
                    label: 'number',
                    prompt: 'Please input a number (greater than 0, less than 201) of messages to be deleted.',
                    type: 'integer'
                }
            ]
        });
    }

    run(message, { numToPurge }) {
        let channel = message.channel;

        // fail if number of messages to purge is invalid
        if (numToPurge <= 0 || numToPurge > 200) {
            return message.reply('Purge number must be greater than 0 and less than 201');
        }

        // channel type must be text for .bulkDelete to be available
        else if (channel.type === 'text') {
            return channel.messages.fetch({limit: numToPurge})
            .then(message => channel.bulkDelete(numToPurge))
            .then(error => console.error())
        }
        else {
            return messsage.reply('Purge command only available in Text Channels');
        }
    }
};
