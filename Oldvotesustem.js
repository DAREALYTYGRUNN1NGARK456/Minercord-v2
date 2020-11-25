module.exports = ({
        Vote: async function(user) {
const DBL = require('dblapi.js');
const dbl = new DBL(process.env.votetoken)

dbl.hasVoted("635230214603145230").then(voted => { if (voted) `$setGlobalUserVar[emeralds;500;${dbl.user_ID}]` 
});

dbl.isWeekend().then(weekend => { if (weekend) console.log("Woo! Multiplier time!") });

dbl.getVotes().then(votes => { if (votes.find(vote => vote.id == "635230214603145230")) console.log("Tonkku has voted!!!") });

console.log('dbl vote syste loaded')
        }
})