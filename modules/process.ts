module.exports.processPost = function(post: any): object {
  // This function returns an object of then necessary data that needs to be put into the database
  let data = {};
  data.title = post.title;
  data.author = post.author.name;
  data.body = post.selftext;
  data.tags = getTags(data.body);

  function getTags(text: string): string[] {
    if (text !== null || (text !== undefined && text.includes("|") === true)) {
      return text.split("|");
    } else {
      return null;
    }
  }
  return data;
};
