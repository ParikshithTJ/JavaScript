// +++++++++++++++++++++++++++++++ NUMBERS +++++++++++++++++++++++++++++++

const score = 400;
console.log(score); // 400

const balance = new Number(400);
console.log(balance); // [Number: 400 ]

console.log(balance.toString()); // 400
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 400.00

const newNumber = 123.789;

console.log(newNumber.toPrecision(3)); // 124 => round-off
console.log(newNumber.toPrecision(4)); // 123.8 => round-off

const hundreds = 1000000;

console.log(hundreds.toLocaleString()); // 10,00,000

// +++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.6)); // 4

console.log(Math.min(4, 6, 7, 4, 1, 0)); // 0
console.log(Math.max(4, 6, 7, 4, 1, 0)); // 7

console.log(Math.random()); // 0 to 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); //we dont want random num to be 0 thats y we r adding  + 1 

//important

let min = 10;
let max = 20;


console.log(Math.random() * (max - min + 1) + min )
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
