const unique = array => array.reduce((acc, num)=>{
     if(acc.includes(num)) return acc;
     return [...acc, num]
},[]);

unique([1,2,1,1,3,4,4,5]);