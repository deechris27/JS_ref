function longestWord(sen){
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
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

console.log(longestWord('helloo there, my name is dee'));
