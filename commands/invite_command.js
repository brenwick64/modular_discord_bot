module.exports = async function(message) {
    code = await message.channel.createInvite({ unique: true, temporary: true});
    link = 'https://discord.gg/' + code
    message.channel.send('Here\s a temporary invite link: '  + link);
}