module.exports = ({
    name: "sell-stone",
    code: `
    $setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone;$authorID];-300];$authorID]
    $title[**You selled** <:stone:780839284353007666> and got $random[40;200] Coins!]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[40;200]]]
       $onlyIf[$getGlobalUserVar[stone;$authorID]>=300;You need at least 300 stone to sell them]`
})