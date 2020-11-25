module.exports = ({
    name: "mine",
    code: `
$description[you mined with your <:stone_pickaxe:769973776859267072> and got]
$addField[<:stone:780839284353007666>;**$random[170;200]**]
$addField[<:iron:780837473222918194>;**$random[100;150]**]
$addField[<:coal:780837672615936041>;**$random[100;150]**]
$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone;$authorID];$random[170;200]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron;$authorID];$random[100;150]]]
$setGlobalUserVar[coal;$sum[$getGlobalUserVar[coal;$authorID];$random[100;150]]]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==1;You need to create a character first in order to use this command, Type \`\`,create-character\`\` type it with the \`\`-\`\` on the middle no spaces.]
$globalCooldown[50s;You have to wait \`\`%time%\`\` to mine again]
$onlyIf[$getGlobalUserVar[upgradepickaxe7;$authorID]==1;]`
})