module.exports.processPost = function(post: {title: string; author: {name: string}; selftext: string; tags: string[]; ups: number; downs: number; gilded: boolean;}): object {
  // This function returns an object of then necessary data that needs to be put into the database
  let data: any = {};

  data.title = post.title;
  data.author = post.author.name;
  data.body = post.selftext;
  data.tags = getTags(data.body);
  data.upvotes = post.ups;
  data.downvotes = post.downs;
  data.gilded = post.gilded;
  data.netUps = data.upvotes - data.downvotes;

  function getTags(text: string): string[] {
    if (text !== null || (text !== undefined && text.includes("|") === true)) {
      return text.split("|");
    } else {
      return null;
    }
  }
  return data;
};
