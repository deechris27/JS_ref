function createPhoneNumber(numbers){
    let phoneNumber;
    if(Array.isArray(numbers) && numbers.length === 10){
         
        phoneNumber = "(" +numbers.slice(0,3).join('') + ") " +numbers.slice(3,6).join('')+ "-"+numbers.slice(6,10).join('') ;
        phoneNumber =  numbers.reduce((acc, el, i)=>{
            if(i===0){
               return "(" +acc + el;
            }
            if(i===2){
                return acc + el + ")";
            }
            if(i===3){
              return acc+" "+el;
            }
            if(i===6){
              return acc+"-"+el;
            }else{
                return acc+el;
            }
         
           }, "");
         
         
         
         }       
      return phoneNumber;
 }

 function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  }

  function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  }

  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }

 function createPhoneNumber(numbers){
    var n = numbers;
    return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
  }

  function createPhoneNumber(numbers){
    numbers.unshift("(");
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join("");
  }

  createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())

  function createPhoneNumber(n) {
    return "(012) 345-6789".replace(/\d/g, d => n[d])
  }

 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));