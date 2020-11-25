module.exports = ({
    name: "mine",
    code: `
$description[you mined with your <:stone_pickaxe:769973776859267072> and got]
$addField[<:stone:780839284353007666>;**$random[100;170]**]
$addField[<:iron:780837473222918194>;**$random[90;120]**]
$addField[<:coal:780837672615936041>;**$random[60;140]**]
$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone;$authorID];$random[100;170]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron;$authorID];$random[90;120]]]
$setGlobalUserVar[coal;$sum[$getGlobalUserVar[coal;$authorID];$random[60;140]]]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==1;You need to create a character first in order to use this command, Type \`\`,create-character\`\` type it with the \`\`-\`\` on the middle no spaces.]
$globalCooldown[56s;You have to wait \`\`%time%\`\` to mine again]
$onlyIf[$getGlobalUserVar[upgradepickaxe5;$authorID]==1;]`
})