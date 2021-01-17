class ProfanityFilter {

    constructor(mode) {
        // red (Bans offenders), yellow (kicks offenders), green (warns offenders) - All will delete offensive message
        this.mode = mode;
        // Add more offensive words at your leisure :)
        this.badWords = ['fiddlesticks', 'poppycock', 'balderdash', 'bullcorn']
    }

    checkMessage(message) {
        this.badWords.forEach(word => {
            if (message.content.toLowerCase() == word){
                const target = message.guild.members.cache.get(message.author.id);
                // Takes action based on the initial mode set by the client
                switch(this.mode){
                    case 'red':
                        target.ban();
                        message.delete()
                        message.channel.send(`User: ${message.author} banned for profanity`);
                        break;
                    case 'yellow':
                        target.kick()
                        message.delete()
                        message.channel.send(`User: ${message.author} kicked for profanity`);
                        break;
                    case 'green':
                        message.delete()
                        message.reply(`Please do not use inappropriate language`);
                        break;
                    default:
                        console.log('Error: Select Red, Yellow, or Green mode for profanity filter');
                }
            }
            
        });

    }
}



module.exports = ProfanityFilter;