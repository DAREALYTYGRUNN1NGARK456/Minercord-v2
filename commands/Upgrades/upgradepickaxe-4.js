module.exports = ({
    name: "upgradepickaxe-5",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 5\`\`]
    $setGlobalUserVar[upgradepickaxe4;1;$authorID]
        $setGlobalUserVar[upgradepickaxe3;2;$authorID]
        $setGlobalUserVar[upgradepickaxe2;2;$authorID]
        $setGlobalUserVar[upgradepickaxe1;2;$authorID]
         $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-5000];$authorID]
    $onlyIf[$getGlobalUserVar[coins;$authorID]>=5000;You don't have enough coins! You need \`\`5,000\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe3;$authorID]==1;You need to upgrade your pickaxe to level 4 in order to upgrade it to level 5]
  $onlyIf[$getGlobalUserVar[upgradepickaxe4;$authorID]==0;You already upgraded your pickaxe to level 5]`
})