
module.exports = function(argument, message) {
    num = argument[0]

    //Checks if argument is present
    if(num){
        //  Checks if argument is a valid integer
        if(!isNaN(num)){
            let number = parseInt(argument)
            let random = Math.floor(Math.random() * number) + 1;
            message.reply('🎲 ' + random)
        }
        else {
            message.reply('Please enter a valid integer value after the !roll command.');
        }
    }
    else{
        message.reply('Please include a maximum roll value after the !roll command.');
    }
    
}