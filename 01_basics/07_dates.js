// +++++++++++ DATES ++++++++++++

let myDate = new Date();
console.log(typeof myDate); // object

console.log(myDate); // 2025-04-01T13:31:48.238Z
console.log(myDate.toString()); // Tue Apr 01 2025 19:03:01 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Tue Apr 01 2025
// console.log(myDate.toISOString()); // 2025-04-01T13:36:34.629Z
// console.log(myDate.toJSON()); // 2025-04-01T13:36:34.629Z
// console.log(myDate.toLocaleDateString()); // 1/4/2025
console.log(myDate.toLocaleString()); // 1/4/2025, 7:06:34 pm
console.log(myDate.toLocaleTimeString()); // 7:06:34 pm

let myDateOfBirth = new Date(2000, 6, 24, 7, 30);
console.log(myDateOfBirth.toDateString()); // Mon Jul 24 2000
console.log(myDateOfBirth.toLocaleString()); // 24/7/2000, 7:30:00 am

let date = new Date("2004-03-16"); // yyy-mm-dd
console.log(date.toLocaleString()); // 16/3/2004, 5:30:00 am

let ind = new Date("01-08-2000"); // mm-dd-yyy
console.log(ind.toLocaleString()); // 8/1/2000, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1743515763343 => it is in mil sec
console.log(ind.getTime()); // 947269800000

console.log(Date.now() / 1000); // 1743516041.081
console.log(Math.floor(Date.now() / 1000)); // 1743516041

let newDate = new Date();
console.log(newDate.getMonth() + 1); // 4
console.log(newDate.getDay()); // 2

newDate.toLocaleString("default", {
  weekday: "long",
});
