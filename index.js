const dbd = require("dbd.js") 
const bot = new dbd.Bot({
token: "", 
prefix:"$getServerVar[prefix]" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
bot.variables({
  //name:"value"
  newcharacter: "0",
  prefix: ">>",
  sticks: "0",
  stone: "0",
  coal: "0",
  iron: "0",
  gold: "0",
  diamond: "0",
  coins: "0",
  xp: "0",
  wood: "0",
  currentpickaxe: "<:wooden_pickaxe:780838464433815593>",
  upgradepickaxe1: "0",
  upgradepickaxe2: "0",
  upgradepickaxe3: "0",
  upgradepickaxe4: "0",
  upgradepickaxe5: "0",
  upgradepickaxe6: "0",
  upgradepickaxe7: "0",
  })
bot.command({
        name: "ping",
        code: "Pong! \`\`$ping\`\`"
})
bot.status({
      text: ">>create-charcater",
      type: "WATCHING",
      time: 12 
})