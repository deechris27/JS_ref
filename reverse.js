function reverseStr(str) {
  return strArr = str.split('').reverse().join('');
 }

console.log(reverseStr('hello'));

function reverseStr(str){
  let revString = '';
  for(let i = str.length; i>=0; i--){
    revString +=  str[i];
  }
  return revString;
}

function reverseStr(str){
  let revString = '';
  for(let i = 0; i<str.length; i++){
    revString = str[i] + revString;
  }
  return revString;
}

function reverseStr(str){
   return str === '' ? 0 : +Object.keys(str).pop()+1;
}

function revString(str){
  let revString = '';
  for(let char of str){
    revString = char + revString;
  }
}



console.log(reverseStr('helloo'));
