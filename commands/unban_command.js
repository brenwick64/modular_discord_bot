module.exports = async function(message, id_string) {

    //  Only members with BAN privileges can UNBAN
    if (message.member.hasPermission("BAN_MEMBERS")){
        try{
            id = parseId(id_string)
            await message.guild.members.unban(id)
            // Skips this message if target is invalid
            message.channel.send(`Unbanned user ${id_string} from the server.`)
        }
        catch(err) {
            console.log(err);
            message.reply('Invalid user for unban command.')
        }
    }
    
    else {
        message.channel.send(`You do not have permissions to unban.`)
    } 
}

// Extracts the ID from the raw mention, as a workaround to banned users being invalid mention objects
function parseId(id_string){
    id_string = id_string.replace('<', '')
    id_string = id_string.replace('>', '')
    id_string = id_string.replace('@', '')
    id_string = id_string.replace('!', '')
    return id_string
}