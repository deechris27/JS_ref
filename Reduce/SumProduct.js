const SumProduct = array => ((acc, pair)=>{
   const [number, factor] = pair;
   return acc + number * factor;
}, 0);

SumProduct([1,2], [3,4], [5,6]);