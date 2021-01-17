const fetch = require('node-fetch')

module.exports = async function(key, message) {
    let url = `https://api.tenor.com/v1/search?q=${key}&limit=8`
    let response = await fetch(url);
    let json = await response.json()
    message.channel.send(json.results[0].url)
}