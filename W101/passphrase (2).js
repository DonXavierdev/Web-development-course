/* In this task, you will be tested on your knowledge in concepts covered so far like strings, variables, arrays, boolean values, etc.

Here is the list of conditions to be met for completing this function in the task:

1.The passphrase should have a minimum of four words.
2.Each word in the passphrase should have more than one character.
3.The function should return a boolean value - true if the supplied string is a valid passphrase and false if it is not.
*/
function isValidPassphrase(a){
  words=a.split(' ')
  if(words.length <4){
    return false
  }
  for(i=0;i<words.length;i++){
    if(words[i].length===1){
      return false
    }
  }
  return true
}
text="this is one text"
res=isValidPassphrase(text)
console.log(res)
