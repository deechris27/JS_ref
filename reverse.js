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

function reverseStr(str){
  let revString = '';
  str.split('').forEach(function(char){
     revString = char + revString;
  });
  return revString;
}

  function reverseStr(str){
    let revString = '';
    str.split('').forEach(e => revString = e + revString);
    return revString;
  }

  function reverseStr(str){
    return str.split('').reduce(function(revString, char){
      return char + revString;
    }, '');
  }

  function reverseStr(str){
    return str.split('').reduce((revString, char)=> char + revString, '');
  }

--------------------
   function isPali(str){
      let revString = str.split('').reduce((rev, char)=> char + rev, '');
      if(str === revString){
        return 'String is a palindrome';
      }else{
        return 'String is not a palindrome';
      }
  }

    function isPali(str){
      let revString = '';
       str.split('').forEach(e=> revString = e + revString);
       return str===revString ? `${str} is a palindrome` : `${str} is not a palindrome`;
    }

    function isPali(str){
      let revString = '';
      for(let char of str){
        revString = char + revString;
      }
      return str===revString ? `${str} is a palindrome` : `${str} is not a palindrome`;
    }

    function isPali(str){
      let revString = '';
      for(let i = str.length; i>=1; i--){
        revString += str[i-1];
      }
      return revString==str ? `${str} is a palindrome` : `${str} is not a palindrome`;
    }

 console.log(isPali('hello'));

//console.log(reverseStr('helloo'));
