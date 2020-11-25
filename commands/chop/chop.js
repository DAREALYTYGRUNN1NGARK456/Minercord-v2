module.exports = ({
    name: "chop",
    code: `
$description[you chopped with your <:wooden_axe:780927495187988500> and got]
$addField[<:wood:780927704043749387>;**$random[20;30]**]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood;$authorID];$random[20;30]]]
$globalCooldown[30s;You have to wait \`\`%time%\`\` to chop again]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==1;You need to create a character first in order to use this command, Type \`\`,create-character\`\` type it with the \`\`-\`\` on the middle no spaces.]`
})