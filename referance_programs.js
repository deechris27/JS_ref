Program to find the length of a tring without length method.

function strLength(s) {
  var length = 0;
  while (s[length] !== undefined)
    length++;
  return length;
}

console.log(strLength("Hello")); // 5
console.log(strLength("")); // 0

------
const str = "Hello world!";

console.log([...str].reduce(a => a+1, 0));

------

var str = "abc";
var len = [...[0,...str].keys()].pop();
console.log(len, str.length);

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
