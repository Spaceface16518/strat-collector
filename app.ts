require("dotenv").config();
const snoowrap: any = require("snoowrap");
const proc: any = require("./modules/process.js");
const ex: any = require("./modules/export.js");
const mongo: any = require("./modules/mongo.js")
function printNoNewline(text: string): void {
  process.stdout.write(text);
}

printNoNewline("configuring...");
let cred: any = {
  // Short for constructor credentials
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  usr: process.env.USERNAME,
  pass: process.env.PASSWORD,
  mongoPass: process.env.MONGODBPASSWORD
};
console.log("done");

printNoNewline("accessing reddit...");
const r: any = new snoowrap({
  userAgent: "Halo-Strat-Collector",
  clientId: cred.id,
  clientSecret: cred.secret,
  username: cred.usr,
  password: cred.pass
});
console.log("done");

printNoNewline("setting query options...");
const queryOptions: object = {
  subreddit: "Halo_Strat_Roulette",
  results: 1 // Number of results collected per query
};
console.log("done");

printNoNewline("Collecting posts...");
r
  .getSubreddit("Halo_Strat_Roulette")
  .getTop({ time: "all" })
  .then(allSubmissions => {
    for (let i: number = 0; i < allSubmissions.length; i++) {
      const submission: object = allSubmissions[i];
      let data: any = proc.processPost(submission);
      if(mongo.check(cred.mongoPass, data) === true){
        mongo.entry(cred.mongoPass, data)
      }
    }
  });
console.log("Done");

printNoNewline('Accessing MongoDB Stratbase...')
mongo.