module.exports = ({
    name: "sell-iron",
    code: `
    $title[**You selled** <:iron:780837473222918194> and got $random[50;3000] Coins!]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[50;3000]]]
             $setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron;$authorID];-300];$authorID]

    $onlyIf[$getGlobalUserVar[iron;$authorID]>=300;You need at least 300 iron  to sell them]`
})