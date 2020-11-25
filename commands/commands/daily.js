module.exports = ({
    name: "daily",
    code: `$title[You claimed your daily coins! here they are $random[100;2000]]
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[100;2000]]]
    $globalCooldown[24h;You have to wait \`\`%time%\`\` to collect your daily coins!!]

`
})