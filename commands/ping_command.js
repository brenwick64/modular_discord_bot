module.exports = async function(message) {
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`)
}