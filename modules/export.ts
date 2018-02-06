module.exports.preview = (data: any): string => {
  let str = `Post by ${data.author}! It is called ${data.title}. Here's a snippet:\n${snip(data.body)}\n`;
  function snip(text: string) {
    // Gets the first 50 characters of a line of text
    if (text !== null || text !== undefined) {
      let characterArray: string[] = text.split("");
      let snippetArray: string[] = [];
      for (let i = 0; i < 50; i++) {
        snippetArray.push(characterArray[i]);
      }
      let snippet: string = snippetArray.join("");
      return snippet;
    } else {
      return null;
    }
  }
  console.log(str)
};

module.exports.spit = (data: any) => {
  console.log(data);
};
