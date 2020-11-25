module.exports = ({
    name: "upgradepickaxe-7",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 7\`\` ]
    $setGlobalUserVar[upgradepickaxe7;1;$authorID]
            $setGlobalUserVar[upgradepickaxe6;2;$authorID]
            $setGlobalUserVar[upgradepickaxe4;2;$authorID]
        $setGlobalUserVar[upgradepickaxe3;2;$authorID]
        $setGlobalUserVar[upgradepickaxe2;2;$authorID]
        $setGlobalUserVar[upgradepickaxe1;2;$authorID]
         $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-8000];$authorID]
    $onlyIf[$getGlobalUserVar[coins;$authorID]>=8000;You don't have enough coins! You need \`\`8,000\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe5;$authorID]==1;You need to upgrade your pickaxe to level 6 in order to upgrade it to level 7]
  $onlyIf[$getGlobalUserVar[upgradepickaxe6;$authorID]==0;You already upgraded your pickaxe to level 7]`
})