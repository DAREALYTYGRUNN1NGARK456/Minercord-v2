module.exports = ({
  name: "create-character",
  code: `
  $thumbnail[https://i.pinimg.com/originals/51/b9/b3/51b9b3db5da0b94626e90b1655730fff.png]
$title[You have created a new character!]
$description[Hello and welcome $username My name is john welcome to **MinerCord** On this bot you will be available to mine, buy, upgrade new pickaxes and more to start your great adventure type \`\`$getServerVar[prefix]mine\`\`]
$setGlobalUserVar[newcharacter;1;$authorID]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==0;You already created a character!]`
})