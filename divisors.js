function divisor(n){
    let divisors = [];
    let isPrime = false;
   if(n===2){
       return `${n} is prime`;
    }
   for(let i=2; i<=n-1; i++){
       if(n%i === 0){
          divisors.push(i);
          isPrime = false;
        }
   }
   isPrime = divisors.length === 0 ? true : false; 
   return isPrime ? `${n} is prime` : divisors;
}

function divisors(integer) {
    var divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
    return divisors.length > 0 ? divisors : integer + ' is prime';
  };

  function divisors(integer) {
    let d = [];
    for (i=2;i<=Math.floor(Math.sqrt(integer));i++) {
      let n = integer / i;
      if (n == Math.floor(n)) {
        d.push(i);
        d.push(n);
      };
    };
    return d.length === 0 ? `${integer} is prime` : d.sort((a,b)=>a-b);
  };

  function divisors(integer) {
    return Array.from(oddGenerator(integer)).length === 0 ? integer + " is prime" : Array.from(oddGenerator(integer))
  };
  
  function* oddGenerator(integer){
    for(var index = 2; index < integer; index++) {
       if(integer % index === 0) yield(index)
    }
  }

  function divisors(integer) {
    let divisors = Array(integer-2).fill('').map((v,i) => i+2).filter(v => integer%v === 0);
    return divisors.length === 0 ? (integer+" is prime") : divisors;
    
  };

  function divisors(integer) {
    var matched = [], i = 1;
    
    while( ++i < integer ) {
      (integer % i !== 0 ) || matched.push(i); 
    }
    
    return matched.length <= 1 ? (integer + " is prime") : matched;
  };

  const divisors = (integer) => { 
    const spread = [...Array(integer).keys()];
    const items =  spread.filter((item, key)=>{
       return item !== 0 && item !== 1 && integer % item === 0;
      });
    if (items.length < 1) {
      return `${integer} is prime`;
    } else {
      return items;
    }
      
    }

console.log(divisor(3));