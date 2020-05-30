const sort = array => array.reduce((acc, num)=>{
     const lessThanOrEqual = acc.filter(item=> item <= num);
     const greater = acc.filter(item=> item>num);
     return [...lessThanOrEqual, num, ...greater];
},[]);

console.log(sort([98,1,2,3,4,9,8,7,6,5,34,76]));