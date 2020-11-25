module.exports = ({
    name: "mine",
    code: `
$description[you mined with your <:wooden_pickaxe:780838464433815593> and got]
$addField[<:stone:780839284353007666>;**$random[60;70]**]
$addField[<:iron:780837473222918194>;**$random[30;40]**]
$addField[<:coal:780837672615936041>;**$random[40;50]**]
$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone;$authorID];$random[60;70]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron;$authorID];$random[30;40]]]
$setGlobalUserVar[coal;$sum[$getGlobalUserVar[coal;$authorID];$random[40;50]]]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==1;You need to create a character first in order to use this command, Type \`\`,create-character\`\` type it with the \`\`-\`\` on the middle no spaces.]
$globalCooldown[58s;You have to wait \`\`%time%\`\` to mine again]
$onlyIf[$getGlobalUserVar[upgradepickaxe2;$authorID]==1;]`
})