const Sum = array => array.reduce((acc, num) => {
    return acc + num;
}, 0);

Sum([1,2,3,4,5,6]);