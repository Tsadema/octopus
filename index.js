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
        ['general', 'General'],
        ['fun', 'Fun'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(chalk.blueBright(`\nLogged in as ${client.user.tag}\n`))
});

client.on('error', console.error);

client.login(token);