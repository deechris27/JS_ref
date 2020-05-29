const maxNumber = array => array.reduce((acc, num)=>{
    if(!acc) return num;
    if(acc < num) return num;
    return acc;
}, null);

maxNumber([1,2,9]);