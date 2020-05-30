const startPromise = Promise.resolve(true);

// const a = Promise.resolve('a');

// const b = Promise.resolve('b');

// const c = Promise.resolve('c');

const promiseFunction = data => {
    return new Promise(resolve => setTimeout(()=>{
        console.log("Hello...", data);
         resolve(data)
    }, 1000))
};

const a = () => promiseFunction('first function');

const b = res => promiseFunction(`${res} - second function`);

const c = res => promiseFunction(`${res} - third function`);

const promiseArray = [a,b,c];

const promiseChain = promiseArr => promiseArr.reduce((acc, fn)=>{
   let done = true;
   return acc.then(res=>{
       if(done) return fn(res);
   })
   .catch(err=>{
       done = false;
       console.log(err);
   });
},startPromise);

promiseChain(promiseArray);