const get = (mainObj, ...path) => { //no default due to spread
    console.log(path)
    return [...path].map(sel=>
          sel.replace(/\[([^\[\]]*)\]/g, '.$1.') // convert to dot notation
          .split('.')
          .filter(Boolean)
          .reduce((accu, curr)=> accu && accu[curr], mainObj)
        )
};

//performant
const get1 = (mainObj, path, def=null) => {
    let newPath = path.replace(/\[/g, '.')
                  .replace(/]/g, '')
                  .split('.');
 
        newPath.forEach(pat=>{
            mainObj = mainObj[pat]
        })

        if(mainObj === undefined ||  mainObj === null){
            return def;
        }

     return mainObj;
};

//recursion
const get2 = (mainObj, path, def=null) => {
   //const _path = Object.prototype.toString.call(path) === '[object Array]'
                 //? path : path.split('.').filter(i=> i.length)

    const _path = typeof path === 'string' ? path.split('.').filter(i=> i.length) : path;
    
    if(!_path.length){
        return mainObj === undefined ? def : mainObj
    }

    //return get2(mainObj, _path.slice(1), def)
    return get2(mainObj[_path.shift()], _path, def)
};

//recursion other way
const get3 = (mainObj, path, def=null) => {
    let _path = Array.isArray(path) ? path : path.split('.');
    mainObj = mainObj[path[0]];
    if(mainObj && _path.length>1){
        return get3(mainObj, _path.slice(1), def)
    }

    return mainObj ? mainObj : def
};


console.log(get3({a:{b:{c:1}}}, 'a.b.c', 20))