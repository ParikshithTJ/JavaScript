/*
 premitive data types
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES6)
7. BigInt (ES11)
*/

let age = 25; // Number
let name = "John"; // String
let isStudent = true; // Boolean
let address; // Undefined
let car = null; // Null(empty)
let uniqueId = Symbol("id"); // Symbol (ES6)
let bigNumber = BigInt(123456789012345678901234567890); // BigInt (ES11)

/*
 non-primitive data types
1. Object
2. Array
3. Function
4. Date
5. RegExp
*/

// let heros = [superman, batman, spiderman]; // Array
const person = {
  // Object
  name: "John",
  age: 25,
  isStudent: true,
  address: null,
  hobbies: ["reading", "gaming"],
};

const greet = function () {
  // Function
  console.log("Hello, World!");
};

/*
// typeof operator

string => "string"
number => "number"
boolean => "boolean"
undefined => "undefined"
null => "object"
symbol => "symbol"
bigint => "bigint"
object => "object"
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory (primitive) vs heap memory (non-primitive)

let names = "John"; // stack memory (primitive)

let anotherName = names; // stack memory (primitive)
anotherName = "Doe";

console.log(names); // John (original value remains unchanged)
console.log(anotherName); // Doe (new value assigned to anotherName)

let person1 = {
  // heap memory (non-primitive)
  name: "John",
  age: 25,
};

let anotherPerson = person1; // heap memory (non-primitive)
anotherPerson.name = "Doe";
anotherPerson.age = 30;

console.log(person1.name); // Doe (original value changed)
console.log(person1.age); // 30 (original value changed)
console.log(anotherPerson.name); // Doe (new value assigned to anotherPerson)
console.log(anotherPerson.age); // 30 (new value assigned to anotherPerson)

let user = {
  name: "pari",
  email: "pari@gamil.com",
};

let user1 = user;

user1.name = "ananth";
user1.email = "ananth@gmail.com";

console.log(user);
console.log(user1);
