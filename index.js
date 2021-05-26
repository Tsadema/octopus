global.startTime = process.hrtime();
// apis
console.log("\nconfiguring packages...");
global.path = require('path');
global.fs = require('fs');
global.os = require('os');
global.request = require('request');
global.sqlite3 = require('sqlite3');
global.Discord = require('discord.js');
global.striptags = require('striptags');
global.prettyMs = require('pretty-ms');
global.ud = require('urban-dictionary');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const chalk = require('chalk');
const { token, prefix, statusList } = require('./data/config.json');
const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '414599338908450817',
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['unfun commands', 'Unfun Commands'],
        ['admin', 't h e   d a n g e r   z o n e'],
        ['wiki', 'Wiki Commands'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        unknownCommand: false,
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

const activities_list = [
    "for simps", 
    "anime",
    "#general", 
    "humans stray further from god",
    ];
    
client.on('ready', () => {
    setInterval(() => {
        const status = Math.floor(Math.random() * (statusList.length - 1) + 1);
        client.user.setPresence({
            status: 'online',
            activity: {
                name: statusList[status],
                type: 'WATCHING'
            },
        });
    }, 30000);
});

client.once('ready', () => {
    console.log(chalk.blueBright(`\nLogged in as ${client.user.tag}`))
    console.log(chalk.cyanBright(`Prefix: ${prefix}`))
});

client.on('error', console.error);

client.login(token);