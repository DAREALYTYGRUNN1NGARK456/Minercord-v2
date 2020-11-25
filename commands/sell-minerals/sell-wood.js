module.exports = ({
    name: "sell-wood",
    code: `
    $title[**You selled** <:wood:780927704043749387> and got $random[30;120]]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[30;120]]]
             $setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood;$authorID];-300];$authorID]
       $onlyIf[$getGlobalUserVar[wood;$authorID]>=300;You need at least 300 <:wood:780927704043749387> to sell them]`
}) 