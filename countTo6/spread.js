
var numbers = [...process.argv];
numbers = numbers.slice(2,numbers.length);
console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`);
