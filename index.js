// Imports
const { Client } = require('discord.js')
const client = new Client();
const express = require('express')
const app = express()
const port = 10000

// Environment Variables
require('dotenv').config()
const loginKey = process.env.CLIENT_KEY
const botChannel = process.env.BOT_CHANNEL

// Autonomous Features
const ProfanityFilter = require('./automations/profanity_filter')
const profanity = new ProfanityFilter(mode = 'green');

//  Commands
const CommandManager = require('./commands/command_manager')
const commands = new CommandManager(delimeter = '!');


client.login(loginKey);
bot_channel = botChannel;

// Handles all messages in all channels
client.on('ready', async () => {
    console.log('Bot Ready...');
})

// Reads all messages from all channels
client.on('message', (message) => {
    console.log(message.content);
    // Ignores all bot messages (including itself)
    if (!message.author.bot) {
        // Autonomous features
        profanity.checkMessage(message)
        // Command Handling
        commands.handleCommand(message)
    }
});

// Configuration for HTTP health check
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    d = new Date()
    console.log(`HTTP health check request at '/'`)
    res.sendStatus(200)
})

