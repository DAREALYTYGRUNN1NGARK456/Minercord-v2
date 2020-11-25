module.exports = ({
    name: "upgradepickaxe-4",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 4\`\`]
    $setGlobalUserVar[upgradepickaxe3;1;$authorID]
        $setGlobalUserVar[upgradepickaxe2;2;$authorID]
        $setGlobalUserVar[upgradepickaxe1;2;$authorID]
        $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-1000];$authorID]
        $onlyIf[$getGlobalUserVar[coins;$authorID]>=1000;You don't have enough coins! you need \`\`1,000\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe2;$authorID]==1;You need to upgrade your pickaxe to level 3 in order to upgrade it to level 4]
     $onlyIf[$getGlobalUserVar[upgradepickaxe3;$authorID]==0;You already upgraded your pickaxe to level 4]`
})