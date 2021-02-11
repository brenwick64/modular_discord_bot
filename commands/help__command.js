const Discord = require('discord.js')

let myEmbed = new Discord.MessageEmbed()

myEmbed
    .setColor("#00C09A")
    .setTitle("Command List:")
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: '**!help**', value: 'Shows a list of all commands.', inline: true },
        { name: '**!invite**', value: 'Get the invite link for this bot.', inline: true },
        { name: '**!ping**', value: 'Measures the server message latency in ms.', inline: true},
        { name: '\u200B', value: '\u200B' },
        { name: '**!kick**', value: 'Attempts to kick the mentioned member.\n(Ex: !kick @troublemaker)', inline: true},
        { name: '**!ban**', value: 'Attempts to ban the mentioned member\n (Ex: !ban @troublemaker)', inline: true},
        { name: '**!unban**', value: 'Attempts to unban the mentioned member\n (Ex: !unban @littletimmy)', inline: true},
        { name: '\u200B', value: '\u200B' },
        { name: '**!roll**', value: 'Rolls a random number between 1 and the argument.\n(Ex: !roll 100)', inline: true},
        { name: '**!gif**', value: 'Returns a GIF based on the argument provided.\n(Ex: !gif kittens)', inline: true},
        { name: '\u200B', value: '\u200B' },

     )
    .setTimestamp()
    .setFooter('Discord Bot 64 • Help Menu', 'https://i.imgur.com/wSTFkRM.png');


module.exports = async function(message) {
    message.channel.send(myEmbed);
}