const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const https = require('https');
const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100'

module.exports = class MemeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'fun',
            memberName: 'meme',
            description: 'ayo kid want some memes',
        })
    }

    run(message) {
        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {
                    message.reply('if this shows up, an error occurred')
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    return;
                }
                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(2303786)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
    }
}