const name = "pari";
const repoCount = 11;

console.log(`my name is ${name} and i have ${repoCount} repos`); // my name is pari and i have 11 repos

//++++++++++++++++++++++ String Methods +++++++++++++++++++++++++++++

const gameName = new String("cricket");
console.log(gameName); // String { 'cricket' }

console.log(gameName[0]); // c
console.log(gameName.__proto__); // String {}

console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.toLowerCase()); // cricket
console.log(gameName.charAt(0)); // c
console.log(gameName.indexOf("i")); // 3

const newString = gameName.substring(0, 3); // cri
console.log(newString); // cri
console.log(gameName.substring(3)); // cket

console.log(gameName.concat(" is my favorite game")); // cricket is my favorite game
console.log(gameName.slice(0, 3)); // cri
console.log(gameName.slice(-3)); // ket
console.log(gameName.split("i")); // [ 'cr', 'cket' ]

console.log(gameName.replace("i", "I")); // crIcket

const gameName1 = "   Vollyball     ";
console.log(gameName1); //    Vollybal
console.log(gameName1.trim()); // Vollyball

const url = "https://www.google.com";

console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true
console.log(url.includes("google")); // true
console.log(url.includes("Google")); // false
console.log(url.includes("yahoo")); // false

// string to array
const str = "hello-my-name-is-pari";
console.log(str.split("-")); // [ 'hello', 'my', 'name', 'is', 'pari' ]
