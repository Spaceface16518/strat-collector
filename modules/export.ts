module.exports.preview = (data: any): string => {
  let str = `Post by ${data.author}! It is called \"${data.title}\". Here's a snippet:\n${snip(data.body)}\n`;

  function snip(text: string) {
    // Gets the first 20 characters of a line of text
    if (text !== null || text !== undefined) {
      let characterArray: string[] = text.split("");
      let snippetArray: string[] = [];
      for (let i = 0; i < 20; i++) {
        snippetArray.push(characterArray[i]);
      }
      let snippet: string = snippetArray.join("");
      return snippet;
    } else {
      return null;
    }
  }
  return str
};

module.exports.spit = (data: any): string => {
  let str = `\n${data.title} by ${data.author}\n${showIfString(data.body)}\nTags: ${data.tags}\nA net upvote value of ${data.netUps}\nThe object model is:\n${data}`;
  
  function showIfString(text: any){
    if(isString(text) === true){
      return text;
    } else {
      return null;
    }
    function isString(text: any) {
      if(typeof text === 'string') {
        return true;
      } else {
        return false;
      }
    }
  }
  return str;
};
