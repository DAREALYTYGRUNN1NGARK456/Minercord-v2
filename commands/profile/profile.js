module.exports = ({
    name: "profile",
    code: `$title[⛏$username[$mentioned[1;yes]]'s Profile⛏]
$description[
 <:Coins:778422257701486623> $getGlobalUserVar[coins;$mentioned[1;yes]]
   <:diamond:780837446827900929> $getGlobalUserVar[diamond;$mentioned[1;yes]]
  <:gold:780837502159945769> $getGlobalUserVar[gold;$mentioned[1;yes]]
<:iron:780837473222918194> $getGlobalUserVar[iron;$mentioned[1;yes]]
<:coal:780837672615936041> $getGlobalUserVar[coal;$mentioned[1;yes]]
<:stone:780839284353007666> $getGlobalUserVar[stone;$mentioned[1;yes]]
 <:wood:780927704043749387> $getGlobalUserVar[wood;$mentioned[1;yes]]]
      $addField[Current Pickaxe;$getGlobalUserVar[currentpickaxe;$mentioned[1;yes]]]

  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $color[$randomText[FFFFFF;00ff00;ffff00;5FFF00;FF0014]]
$onlyIf[$getGlobalUserVar[newcharacter;$authorID]==1;You need to create a character first in order to use this command, Type \`\`,create-character\`\` type it with the \`\`-\`\` on the middle no spaces.]`
})