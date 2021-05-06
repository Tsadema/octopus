const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const chalk = require('chalk');
const { token } = require('./config.json');
const client = new CommandoClient({
    commandPrefix: '8!',
    owner: '414599338908450817',
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['please help i\'m stuck in a simulation', 'Grand Theft Auto VI is a thing here'],
        ['admin', 't h e   d a n g e r   z o n e'],
        ['wiki', 'become SMORT'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(chalk.blueBright(`\nLogged in as ${client.user.tag}\n`))
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: 'with 7 cups of triple-shot espresso',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/notacire'
        },
    })
});

client.on('error', console.error);

client.login(token);