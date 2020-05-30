const objToArray = obj => Object.keys(obj).reduce((acc, num)=>{
     return [...acc, {num, value: obj[num]}]
}, []);