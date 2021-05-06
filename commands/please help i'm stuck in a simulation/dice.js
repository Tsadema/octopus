const { Command } = require('discord.js-commando');

module.exports = class DiceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            aliases: ['roll'],
            group: 'please help i\'m stuck in a simulation',
            memberName: 'dice',
            description: 'roll a standard 1-6 dice',
            clientPermissions: ['SEND_MESSAGES'],
            args: [
                {
                    key: 'minimum',
                    prompt: 'minimum number for dice roll',
                    type: 'integer',
                    'default': '1',
                },
                {
                    key: 'maximum',
                    prompt: 'maximum number for dice roll',
                    type: 'integer',
                    'default': '6',
                },
            ],
        });
    }

    run(message, { minimum, maximum }) {
        let min = Math.ceil(minimum);
        let max = Math.floor(maximum + 1);
        let number = (Math.floor(Math.random() * (max - min) + min));
        return message.say(`You rolled ... ${number}!`)
    };
};