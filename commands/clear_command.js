module.exports = async function(message) {
    message.channel.bulkDelete(100)
    // message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`)
}