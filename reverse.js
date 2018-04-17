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

   function revInt(num){
     let revNum = num.toString().split('').reverse().join('');
      return parseInt(revNum);
   }

   function revInt(num){
     let revNum = num.toString().split('').reverse().join('');
     return parseInt(revNum) * Math.sign(num);
   }

   function capitolizeThem(str){
      let strArr = str.toLowerCase().split(' ');
      for(let i = 0; i<strArr.length; i++){
        strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1);
      }
      return strArr.join(' ');
   }

  function capitolizeThem(str){
    return str.toLowerCase().split(' ')
    .map(e => e[0].toUpperCase() + e.substr(1))
    .join(' ');
  }

  function capitolizeThem(str){
    return str.replace(/\b[a-z]/gi, e=> e.toUpperCase());
  }

console.log(capitolizeThem('hello world'));

 //console.log(revInt(-34455));

//console.log(reverseStr('helloo'));
