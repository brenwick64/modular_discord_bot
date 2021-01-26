const gif = require('./gif_command');
const ping = require('./ping_command');
const kick = require('./kick_command');
const ban = require('./ban_command');
const unban = require('./unban_command');

/* This class parses a user's message into a command, and provides the needed
    information to each command.  Messages are passed into all commands, as response/action
    handling is done in their specific files.
*/

class CommandManager {

    constructor(delimeter) {
        this.delimeter = delimeter
    }

    handleCommand(message){
        // Identifies if a user wished to invoke a command,then handles the command
        if(message.content.charAt(0) === this.delimeter){
            let tokens = message.content.split(" ");
            let command = tokens.shift().substring(1);

            switch(command){
                case 'ban':
                    ban(message)
                    break;

                case 'gif':
                    let key = tokens.toString()
                    gif(key, message)
                    break;

                case 'help':
                    break;

                case 'kick':
                    kick(message)
                    break;

                case 'ping':
                    ping(message)
                    break;

                case 'unban':
                    let id_string = tokens.toString()
                    unban(message, id_string)
                    break;

                default:
                    message.reply('Unknown Command: Please type \'!help\' for a list of commands.')
                    break;
            }
        }
        
    }
}



module.exports = CommandManager;