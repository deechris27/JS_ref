function recursiveSum(number){
   let arr =  number.toString().split('')
             .reduce((acc, num)=>acc+Number(num),0);
   return arr.toString().length > 1 ? recursiveSum(arr) : arr;
}

function digital_root(n) {
    return--n%9+1;
  }

console.log(recursiveSum(27101988));