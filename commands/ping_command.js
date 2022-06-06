module.exports = async function(message) {
    message.channel.send(`Bot response latency is ${Date.now() - message.createdTimestamp}ms.`)
}