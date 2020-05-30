const reverse = array => array.reduce((acc, num)=>{
     return [num, ...acc];
},[]);

reverse([1,2,3,4,5,9,8,7]);