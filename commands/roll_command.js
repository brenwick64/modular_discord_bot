
module.exports = function(argument, message) {
    let number = parseInt(argument)
    let random = Math.floor(Math.random() * number) + 1;
    message.reply('🎲 ' + random)
}