module.exports = ({
    name: "sell-gold",
    code: `
    $title[**You selled** <:gold:780837502159945769> and got $random[50;5000] Coins!]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[50;5000]]]
             $setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold;$authorID];-4000];$authorID]

    $onlyIf[$getGlobalUserVar[gold;$authorID]>=400;You need at least 300 Gold to sell them]`
})