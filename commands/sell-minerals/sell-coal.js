module.exports = ({
    name: "sell-coal",
    code: `
    $title[**You selled** <:coal:780837672615936041> and got $random[40;50]]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[40;50]]]

             $setGlobalUserVar[coal;$sum[$getGlobalUserVar[coal;$authorID];-300];$authorID]

       $onlyIf[$getGlobalUserVar[coal;$authorID]>=300;You need at least 300 coal to sell them]`
}) 