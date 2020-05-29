const filterMap = (arr, filterFun, mapFun) => arr.reduce((acc, num)=>{
    if(!filterFun(num)) return acc;
    return [...acc, mapFun(num)];
},[]);

filterMap([1,2,3,4,5], x=>x!==2, x=>x*2);