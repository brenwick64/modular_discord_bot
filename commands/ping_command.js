module.exports = async function(message) {
    message.channel.send(`Pong! Response latency is ${Date.now() - message.createdTimestamp}ms.`)
}