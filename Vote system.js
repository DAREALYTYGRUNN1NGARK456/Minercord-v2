const discord = require 
("discord.js")
const client = new discord.Client();
const DBL = require('dblapi.js');
const dbl = new DBL(process.env.votetoken)

client.on("ready", () => {
setInterval(() => {
        dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
    }, 1800000);
})

console.log("VOTE SYSTEM LOADED")
client.login(process.env.BOT_TOKEN)