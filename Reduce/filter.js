const filter = (arr, fn) => arr.reduce((acc, num)=>{
    if(!fn(num)) return acc;
    return [...acc, num]
},[]);

filter([1,2,3,4,5], x=> x!==2);