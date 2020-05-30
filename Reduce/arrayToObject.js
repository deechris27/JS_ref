const arrayToObject = array => array.reduce((acc, num)=>{
    const {id, ...others} = num;
    return {...acc, [id]:num}
},{});

arrayToObject([
    {id:0, name: 'Deepak'},
    {id:1, name: 'Mytidbit'},
    {id:2, name: 'Hello'}
]);