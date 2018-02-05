require('dotenv').config();
const proc = require('./modules/process')
const snoowrap = require('snoowrap');
const snoostorm = require('snoostorm');
let cred = { // Short for constructor credentials
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  usr: process.env.USER,
  pass: process.env.PASS
}
const wrap = new snoowrap({
  userAgent: 'Halo-Strat-Collector',
  clientId: cred.id,
  clientSecret: cred.secret,
  username: cred.usr,
  password: cred.pass

})

const client = new snoostorm(wrap);

const queryOptions: object = {
  subreddit: 'all',
  results: 25, // Number of results collected per query
}

const streamPost = client.SubmissionStream(queryOptions)

streamPost.on('post', function(post: object): void {
  console.log(post) // NOTE: right now just log to console, but this is where the post will be processed.
})
