console.log("Hello World");
const accountId = 144553;
let accountEmail = "sujal@google.com";
var accountCity = "Agra";
const state = "UP";

accountEmail = "negi@google.com";
accountCity = "Delhi";
console.table([accountId, accountEmail, accountCity, state]);

let score = 33;
console.log(typeof score);

let scoreInString = "33";
let valueInNumber = Number(scoreInString);


console.log(typeof valueInNumber);

let myAge = "20";
let myAgeAsNumber = Number(myAge);
console.log(typeof myAgeAsNumber);

let myScore = "100abc";
let convertedScore = Number(myScore);
console.log(typeof convertedScore);
console.log(convertedScore);

let myScoreline = "33abc";
let myScorelineAsNumber = Number(myScoreline);

console.log(typeof myScorelineAsNumber)
console.log(myScorelineAsNumber)

let isLoggedIn = 1;
let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);

let marks = 200;
let marksInString = String(marks);
console.log(marksInString);

let emptyData = null;
let emptyDataInString = String(emptyData);
console.log(emptyDataInString);

let unassignedData;
let unassignedDataInString = String(unassignedData);
console.log(unassignedDataInString)

console.log("10" + 20 + 30);
console.log(10 + 20 + "30");

let valueOne = "100";
let valueTwo = 50;
console.log(valueOne - valueTwo);

console.log("50" + 50);
console.log("50" - 50);
console.log("abc" - 50);

let age = 20;
let canVote = age >= 18;
console.log(canVote);
console.log(typeof canVote);