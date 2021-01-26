module.exports = async function(message) {

    if (message.member.hasPermission("KICK_MEMBERS")){
        // Ignores attempts to kick non-users
        if(message.mentions.users.first()){
            let user = message.mentions.users.first();
            try{
                await message.guild.members.cache.get(user.id).kick()
                // Skips this message if target is invalid
                message.channel.send(`Kicked ${user} from the server.`)
            }  catch {
                message.reply(`You cannot kick ${user}`)
            }
        }        
    }
    else {
        message.channel.send(`You do not have permissions to kick.`)

    }

}