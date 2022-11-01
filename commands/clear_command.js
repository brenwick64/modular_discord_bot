module.exports = async function(message) {
    message.channel.bulkDelete(100)
}