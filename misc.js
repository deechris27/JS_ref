function longestWord(str){
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  console.log(wordArr);
  const sorted = wordArr.sort((a,b)=>{
    return b.length - a.length;
  });
  console.log(sorted);

  const sortedArr = sorted.filter(function(word){
      return word.length === sorted[0].length
   });

  if(sortedArr.length == 1){
    return sortedArr.shift();
  }else{
    return sortedArr;
  }

}

function longestWord(sen) {

  let maxLetters = 0;
  let outputArr = [];
  sen.toLowerCase()
    .match(/\w+/g)
    .forEach(word => {
      if (!(word.length < maxLetters)) {
        if (word.length > maxLetters) {
          maxLetters = word.length;
          outputArr = [];
        }
        outputArr.push(word);
      }
    });
  return outputArr.length > 1 ? outputArr : outputArr[0];
}

 console.log(longestWord('hello world'));
console.log(longestWord('helloo there, my name is dee'));
