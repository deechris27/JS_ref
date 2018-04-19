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

   function chunkArray(arr, len){
     let chunkedArr = [];
     let i = 0;
     while(i < arr.length){
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
     }
        return chunkedArr;
   }

   function chunkArray(arr, len){

     let chunkedArr = [];

     arr.forEach((val)=>{
         const last = chunkedArr[chunkedArr.length-1];
            console.log(last);
         if(!last || last.length === len){
           chunkedArr.push([val]);
           //console.log(chunkedArr);
         }else{
           last.push(val);
         }
         console.log('after ' +last);


     });
      return chunkedArr;
   }

   function chunkArray(arr, len) {

       let i=0, output = [], currArr = [];

       arr.forEach(element => {
           currArr.push(element);
           i++;
           if (i%len === 0 || i === arr.length) {
               output.push(currArr);
               currArr = [];
               }
           });
       return output;

    return Array.from({ length: Math.ceil(arr.length / len) }, (v, i) =>
    arr.slice(i * len, i * len + len)
    );
}


   console.log(chunkArray([1,2,3,4,5,6,7], 2));

console.log(chunkArray([1,2,3,4,5,6,7], 3));
 console.log(longestWord('hello world'));
console.log(longestWord('helloo there, my name is dee'));
