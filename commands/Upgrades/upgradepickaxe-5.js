module.exports = ({
    name: "upgradepickaxe-6",
    code: `$title[**You upgraded your pickaxe** \`\`Is now level 6\`\` Your pickaxes evolved! to a <:stone_pickaxe:769973776859267072> !!]
    $setGlobalUserVar[upgradepickaxe5;1;$authorID]
                $setGlobalUserVar[currentpickaxe;<:stone_pickaxe:769973776859267072>;$authorID]
            $setGlobalUserVar[upgradepickaxe4;2;$authorID]
        $setGlobalUserVar[upgradepickaxe3;2;$authorID]
        $setGlobalUserVar[upgradepickaxe2;2;$authorID]
        $setGlobalUserVar[upgradepickaxe1;2;$authorID]
         $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-7000];$authorID]
    $onlyIf[$getGlobalUserVar[coins;$authorID]>=7000;You don't have enough coins! You need \`\`7,000\`\` Coins You can get them by selling your minerals!]
    $onlyIf[$getGlobalUserVar[upgradepickaxe4;$authorID]==1;You need to upgrade your pickaxe to level 5 in order to upgrade it to level 6]
  $onlyIf[$getGlobalUserVar[upgradepickaxe5;$authorID]==0;You already upgraded your pickaxe to level 6]`
})