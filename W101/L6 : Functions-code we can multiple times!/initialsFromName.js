/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  word=name.split(' ')
  if(word.length>=2){
    return word[0][0].toUpperCase()+word[word.length-1][0].toUpperCase()
  }
  else{
    return word[0][0].toUpperCase()+word[0][1].toUpperCase()
  }
};
text="John honai"
console.log(createInitialsFromName(text))
