module.exports = ({
    name: "upgradepickaxe-2",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 2\`\`]
    $setGlobalUserVar[upgradepickaxe1;1;$authorID]
     $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]
    $onlyIf[$getGlobalUserVar[coins;$authorID]>=200;You don't have enough coins! you \`\`200\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe1;$authorID]==0;You already upgraded your pickaxe to level 2]`
})