const set = (mainObj, path, value) => {
    if(!mainObj){
        return "";
    }
    let newPath = path.replace(/\[/g, '.')
                  .replace(/]/g, '')
                  .split('.');

    let key = newPath[newPath.length-1];
    newPath.forEach(path=>{
        if(path === key){
            mainObj[path] = value
        }else{
            mainObj = mainObj[path]
        }
    });
}
// let mainObj = {a:{b:{c:1}}};
// console.log(mainObj)
// set(mainObj, 'a.b.c', 20)
// console.log(mainObj)

const set1 = (mainObj, path , value)=>{
   
}