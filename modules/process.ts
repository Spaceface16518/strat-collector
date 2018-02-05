module.exports = function processPost(post:object): object{
  // This function returns an *object* of then necessary data that needs to be put into the database
  let data = {
    title: post.title,
    body: post.selftext,
    author: post.author.name,
    tags: this.getTags(),
    getTags(): string[]{
      let body: string= this.body;
      let tagArray: string[] = body.split('|')
      return tagArray
    }
  };
  return data
}