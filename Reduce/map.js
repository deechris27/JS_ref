const map = (arr, fn) => arr.reduce((acc, num)=>{
   return [...acc, fn(num)];
}, []);

map([1,2,3,4,5], x=>x*2);