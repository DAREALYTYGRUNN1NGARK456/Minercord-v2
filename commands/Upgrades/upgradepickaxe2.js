module.exports = ({
    name: "upgradepickaxe-3",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 3\`\`]
    $setGlobalUserVar[upgradepickaxe2;1;$authorID]
        $setGlobalUserVar[upgradepickaxe1;2;$authorID]
         $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-500];$authorID]
    $onlyIf[$getGlobalUserVar[coins;$authorID]>=500;You don't have enough coins!  you need \`\`500\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe1;$authorID]==1;You need to upgrade your pickaxe to level 2 in order to upgrade it to level 3]
    $onlyIf[$getGlobalUserVar[upgradepickaxe2;$authorID]==0;You already upgraded your pickaxe to level 3]`
})