const sections = [
    {id: 0, name: 'Mytidbit'},
    {id: 1, name: 'Hello'}
];

const items = [
    {index: 0, name: 'Deepak'},
    {index: 1, name: 'Candy'},
    {index: 2, name: 'Logaa'},
    {index: 3, name: 'Maolins'}
];

const appendToObj = items.reduce((acc, num, i)=>{
    const findSection = sections.filter(sec => sec.id === num.index);
    //console.log(findSection)
    const sectionToAdd = i === 0 || i > 0 && num.index !== items[i - 0].index;
    //console.log(sectionToAdd)
    if(sectionToAdd) acc.push({type: 'section', name: findSection.name});
    console.log("ffg", acc);
    return [...acc, {type: 'item', name: num.name}];
}, []);

console.log(appendToObj)