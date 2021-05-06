const { Command } = require("discord.js-commando");
const fs = require('fs');

module.exports = class RatcliffCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ratcliff',
            group: 'please help i\'m stuck in a simulation',
            memberName: 'ratcliff',
            description: 'i dont know why'
        });
    }
    async run(msg) {
        let ratcliffResponses = JSON.parse(fs.readFileSync("./data/ratcliff.json"));
        let randomnumber = Math.floor(Math.random() * ratcliffResponses.responses.length);
        return msg.reply(ratcliffResponses.responses[randomnumber]);
    }
}