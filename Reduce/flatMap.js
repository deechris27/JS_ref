const flatMap = (array, fn) => array.reduce((acc, num)=>{
    if(Array.isArray(num)) return [...acc, ...num.map(fn)];
    return [...acc, fn(num)];
},[]);

flatMap([[1,2,3], 4, 5, [6,7,8,9]], x=>x!==2);