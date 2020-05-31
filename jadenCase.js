String.prototype.toJadenCase = function () {
      let words = this.split(' ');
   for(let char of words){
       words[words.indexOf(char)] = char.charAt(0).toUpperCase() + char.slice(1);
   }

   return words.join(' ');
};

String.prototype.toPascalCase = function(){
    let words = this.split(' ');
    words.forEach(char=> words[words.indexOf(char)]= char.charAt(0).toUpperCase() + char.slice(1) );    
    return words.join(" ");
}

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};


console.log("hello world wassup".toJadenCase());
console.log("hello world wassup".toPascalCase());