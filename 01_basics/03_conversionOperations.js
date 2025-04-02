let score = "33abc";

console.log(typeof score); // number
console.log(typeof String(score)); // string
console.log(typeof score); //number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // 33 //number
console.log(valueInNumber); // NaN not a number

// "33" => 33
// "33abc" => NaN not a number
// true => 1; false => 0;

let loggedIn = "1";

let booleanValue = Boolean(loggedIn);
console.log(booleanValue); // true;

// "1" => true; "0" => false
// "" => false; "abc" => true

let number = 33;

let stringIs = String(number);
console.log(stringIs); // "33"
console.log(typeof stringIs); // string

// ********************************** OPERATIONS ********************************** //

console.log(2 + 2); // 4 => 2+2 = 4 => addition
console.log(2 - 2); // 0 => 2-2 = 0 => subtraction
console.log(2 * 2); // 4 => 2*2 = 4 => multiplication
console.log(2 / 2); // 1 => 2/2 = 1 => division
console.log(2 ** 3); // 8 => 2^3 = 2*2*2 = 8 => exponentiation
console.log(2 % 2); // 0 => remainder of 2/2 = 0 => modulus

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2; // concatenation

console.log(str3);

let count = 0;
// count ++;
++count;
console.log(count); // 2
console.log(count); // 1
