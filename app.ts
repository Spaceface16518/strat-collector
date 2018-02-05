require('dotenv').config();
const snoowrap = require('snoowrap');
let cred = { // Short for constructor credentials
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  usr: process.env.USERNAME,
  pass: process.env.PASSWORD
}
const r = new snoowrap({
  userAgent: 'Halo-Strat-Collector',
  clientId: cred.id,
  clientSecret: cred.secret,
  username: cred.usr,
  password: cred.pass

})

const queryOptions: object = {
  subreddit: 'Halo_Strat_Roulette',
  results: 1, // Number of results collected per query
}

function getTags(submission: object): string[] {}

console.log('Running...')
r.getSubreddit("Halo_Strat_Roulette")
  .getTop({ time: "all" })
  .then(allSubmissions => {
    for (let i = 0; i < allSubmissions.length; i++) {
      const submission = allSubmissions[i];
      console.log(submission.title);
      getTags(submission);
    }
  });