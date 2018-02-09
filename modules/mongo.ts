module.exports.entry = (mongoPassword: string, entry: object): void => {
  var MongoClient = require("mongodb").MongoClient;

  var uri = `mongodb+srv://Spaceface16518:${mongoPassword}@stratbase-rncqk.mongodb.net/test`;
  MongoClient.connect(uri, (err, client): void => {
    if (err) throw err;
    const collection = client.db("Strats").collection("test");
    collection.insertOne(entry, (err, res) => {
      if (err) throw err;
      console.log("An entry was pushed to the Stratbase");
    });
    client.close();
  });
};

module.exports.check = (mongoPassword: string, queryObject: { id: string }): boolean => {
  var MongoClient: any = require("mongodb").MongoClient;

  var uri: string = encodeURIComponent(`mongodb+srv://Spaceface16518:${mongoPassword}@stratbase-rncqk.mongodb.net/strats`);
  let r: undefined;
  MongoClient.connect(uri, (err, client): void => {
    if (err) throw err;
    const collection: any = client.db("Strats").collection("test");
    collection.find({ id: queryObject.id }).toArray((err, result): void => {
      if (err) throw err;
      r = result;
    });
    client.close();
  });
  if (typeof r !== null || typeof r !== undefined && r.length > 1) {
    return false;
  } else {
    return true
  };
};

module.exports.find = (mongoPassword: string, queryId: string): object => {
  var MongoClient: any = require("mongodb").MongoClient;

  var uri: string = `mongodb+srv://Spaceface16518:${mongoPassword}@stratbase-rncqk.mongodb.net/test`;
  let q: undefined;
  MongoClient.connect(uri, (err, client): void => {
    if (err) throw err;
    const collection: any = client.db("Strats").collection("test");
    collection.find({ id: queryId }).toArray((err, result): void => {
      if (err) throw err;
      q = result;
    });
    client.close();
  });
  return q;
};

module.exports.findAll = (mongoPassword: string): object => {
  var MongoClient: any = require("mongodb").MongoClient;

  var uri: string = `mongodb+srv://Spaceface16518:${mongoPassword}@stratbase-rncqk.mongodb.net/test`;
  let q: undefined;
  MongoClient.connect(uri, (err, client): void => {
    if (err) throw err;
    const collection: any = client.db("Strats").collection("test");
    collection.find({}).toArray((err, result): void => {
      if (err) throw err;
      q = result;
    });
    client.close();
  });
  return q;
};
