module.exports = async function(message) {

    if (message.member.hasPermission("BAN_MEMBERS")){
        // Ignores attempts to ban non-users
        if (message.mentions.user.first()){
            let user = message.mentions.users.first();
            try{
                await message.guild.members.cache.get(user.id).ban()
                // Skips this message if target is invalid
                message.channel.send(`Banned ${user} from the server.`)
            }  catch {
                message.reply(`You cannot ban ${user}`)
            }
        }
    }
    else {
        message.channel.send(`You do not have permissions to ban.`)
    }

}