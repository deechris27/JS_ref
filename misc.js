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

function flattenArr(arr){
  return arr.reduce((a,b)=> a.concat(b));
}

function flattenArr(arr){
   return [].concat.apply([], arr);
}

function flattenArr(arr){
  return arr.reduce((a, b)=> [...a, ...b]);
}

function flattenArr(arr){
   return [].concat(...arr);
}

function lengh(str){
  let length = 0;
  while(str[length] != undefined){
    length++;
  }
  return length;
}

console.log(lengh('Hello World'));

  function isAnagram(str1, str2){
      return formatString(str1);
  }

  function formatString(str){
      return str.replace(/[^\w]/g,'')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }

  function letterChanges(str){
      let result = str.replace(/[a-z]/gi, (char)=>{
        if(char == 'z' || char == 'Z'){
          return 'a';
        }else{
          return String.fromCharCode(char.charCodeAt()+1);
        }
      });
      return result;
  }

console.log(letterChanges('Hello There'));
console.log(isAnagram("Hello%#$","World"));

console.log(flattenArr([[1,2],[3,4],[5,6],[7]]));

console.log(chunkArray([1,2,3,4,5,6,7], 3));
 console.log(longestWord('hello world'));
console.log(longestWord('helloo there, my name is dee'));
