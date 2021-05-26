const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const request = require('request');
const striptags = require('striptags');

module.exports = class WikiCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'wiki',
			group: 'wiki',
			memberName: 'wiki',
			description: 'Searches a query on Wikipedia.',
			examples: ['wiki Spoons'],
			args: [{
				key: 'text',
				prompt: 'What would you like to search for?',
				type: 'string'
			}]
		});
	}
	async run(msg, args) {
		let message = msg.content.split(" ");
		let messagefull = "";
		for (var i = 1; i < message.length; i++) {
			messagefull = messagefull + message[i] + " "
		}
		let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${messagefull}&utf8=&format=json`
		request({
			url: url,
			json: true
		}, function getteamdata(error, response, body) {
			if (!error && response.statusCode === 200 && body.query.search[0]) {
				let finalurl = `http://en.wikipedia.org/?curid=${body.query.search[0].pageid}`
				let snippet = striptags(body.query.search[0].snippet)
				let embed = new MessageEmbed()
					.setTitle(`:book: ${body.query.search[0].title}`)
					.setAuthor('Wikipedia', 'http://i.imgur.com/JI3HL2j.png')
					.setDescription(`${snippet}.. [Read more](${finalurl})`)
					.setColor('9B59B6')
					.addField('Word Count', `${body.query.search[0].wordcount}`, true)
					.setFooter(`Wikipedia article pulled on ${new Date()}`)
				msg.channel.send({
					embed
				});
			} else {
				msg.reply(`The query \`${messagefull}\` returned no results.`);
			}
		})
		return;
	}
};
