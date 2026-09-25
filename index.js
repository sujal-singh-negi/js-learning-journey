//  console.log(typeof myAgeAsNumber);
// const { use } = require("react");

// let myScore = "100abc";
// let convertedScore = Number(myScore);
// console.log(typeof convertedScore);
// console.log(convertedScore);

// let myScoreline = "33abc";
// let myScorelineAsNumber = Number(myScoreline);

// console.log(typeof myScorelineAsNumber)
// console.log(myScorelineAsNumber)

// let isLoggedIn = 1;
// let BooleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(BooleanIsLoggedIn);

// let marks = 200;
// let marksInString = String(marks);
// console.log(marksInString);

// let emptyData = null;
// let emptyDataInString = String(emptyData);
// console.log(emptyDataInString);

// let unassignedData;
// let unassignedDataInString = String(unassignedData);
// console.log(unassignedDataInString)

// console.log("10" + 20 + 30);
// console.log(10 + 20 + "30");

// let valueOne = "100";
// let valueTwo = 50;
// console.log(valueOne - valueTwo);

// console.log("50" + 50);
// console.log("50" - 50);
// console.log("abc" - 50);

// let age = 20;
// let canVote = age >= 18;
// console.log(canVote);
// console.log(typeof canVote);

// let bankBalance = 399;
// let movieTicket = 250;
// if (bankBalance >= movieTicket) {
//  console.log("Ticket is booked !!");
    
// } else {
//   console.log("Not Enough Money");
// }

// let username = "";
// if (username) {
//   console.log("Welcome User!");
// } else {
//   console.log("Please login first!");
// }

// let coupon = "Welcome20";
// if (coupon === "Super50") {
//   console.log("50% discount applied!!");
// } else if (coupon === "Welcome20") {
//   console.log("20% discount applied!!");
// } else {
//   console.log("invalid coupon");
// }

// let marks = 75;
// if (marks >= 80) {
//   console.log("GRADE A");
// } else if (marks >=50) {
//   console.log("GRADE B");
// } else {
//   console.log("YOU ARE FAILED");
// }

// let age = 25;
// let hasId = true;
// if (age >= 20 && hasId === true) {
//   console.log("Entry allowed.");
// } else {
//   console.log("Entry denied.");
// }

// let isUpi = false;
// let isCard = false;
// if (isUpi === true || isCard ===true) {
//   console.log("Payment successful");
// } else {
//   console.log("Payment unsuccessful");
// }

// let isLoggedIn = false;
// if (!isLoggedIn) {
//   console.log("Please login to continue");
// } else {
//   console.log("Welcome Back!!");
// }

// let isLoggedOut = false;
// if (!isLoggedOut) {
//   console.log("Show user dashboard");
// } else {
//   console.log("Show login again");
// }

// let isAccountLocked = false;
// if (!isAccountLocked) {
//   console.log("payment successfull");
// } else {
//   console.log("account is locked");
// }

// let isLoggedIn = true;
// let accountBlocked = false;
// let isAdmin = false;
// let hasPasskey = true;
// if (isLoggedIn && !accountBlocked && (isAdmin || hasPasskey)){
//   console.log("ACCESS GRANTED");
// } else {
//   console.log("ACCESS DENIED");
// }

// let isPrimeMember = true;
// let isOutOfStock = false;
// let hasCoupon = false;
// let hasBankOffer = true;
// if (isPrimeMember && !isOutOfStock && (hasCoupon || hasBankOffer)) {
//   console.log("Offer applied and order placed");
// } else {
//   console.log("Order failed");
// }

// let isSeatAvailable = true;
// let isPassportExpired = false;
// let hasBusinessPasss = false;
// let hasStudentDiscount = false;
// if(isSeatAvailable && !isPassportExpired && (hasBusinessPasss || hasStudentDiscount)) {
//   console.log("Your seat is booked. thankyou for your patience...");
// } else {
//   console.log("Conditions are not matching for your booking!!");
// }

// let isUserVerified = true;
// let isRegionRestricted = true;
// let hasPremiumSubscription = false;
// let isFreeTier = true;
// if (isUserVerified && !isRegionRestricted && (hasPremiumSubscription || isFreeTier)) {
//   console.log("Ready to watch the movie");
// } else {
//   console.log("sorry conditions are not matching");
// }



// top 6 blacklisted Falsy values ( false, null, 0, undefined, NaN, "", );


// let emptyData = null;
// let unassignedVar;
// let invalidMath = "Code" * 5;
// if (emptyData) {
//   console.log("Data exists");
// } else {
//   console.log("null is falsy");
// } 
// if (unassignedVar) {
//   console.log("variable has value");
// } else {
//   console.log("Undefined is a falsy");
// } 
// if (invalidMath) {
//   console.log("maths is valid!!!");
// } else {
//   console.log("is invalid")
// }

// let userAge = 30;
// let convertedAge = Number(userAge);
// console.log(convertedAge, typeof convertedAge);

// let invalidAge = "33abc";
// let convertedInvalid = Number(invalidAge);
// console.log(convertedInvalid, typeof convertedInvalid);

// console.log("null conversion:", Number(null));
// console.log("undefined conversion:", Number(undefined));
// console.log("boolean conversion:" , Number(true) , Number(false));

// console.log(Boolean(""));
// console.log(Boolean("Sujal"));

// console.log("Test1 :", Boolean("0"));
// console.log("Test2 :", Boolean(0));
// console.log("Test3 :", Boolean(" ")); 

// console.log("Implicit plus:" , "5" + 2);le
// console.log("Implicit minus: ", "5" - 2);
// console.log("Implicit multiply : ", "5" * 2);

// console.log(10 + null);
// console.log(10 + undefined);
// console.log("10" - 5);
// console.log(10 + true);
// console.log(10 - false);

// console.log("loose check:", "5"== 5);
// console.log("strict check", "5" === 5);

// console.log("Test1:", "10" == 10);
// console.log("Test2:", "10" === 10);
// console.log("Test3:", 0 == false);

// console.log(typeof ("100" - "50"));
// console.log(typeof (10 - "5" + "5"));

// let userScore = null;
// let finalScore = userScore ?? 0;
// console.log(finalScore);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non primitive or reference)

// 1. Stack Memory Test (Primitive)
let originalScore = 100;
let copiedScore = originalScore;
copiedScore = 200;

// console.log(originalScore);

let userOne = { name: "Sujal" };
let userTwo = userOne;
userTwo.name = "rahul";
// console.log(userOne.name);

let cityName = "Delhi"
let newCity = cityName
newCity = "Mumbai"
// console.log(cityName)

const name = "Sujal"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = "GTA 5"
const price = 2000
// console.log(`The price of ${gameName} is ${price} rupeess...`)

const game1 = "ChaiCode"
// console.log(game1.length)
// console.log(game1.toUpperCase())
// console.log(game1.charAt(2));
// console.log(game1.indexOf("C"))

const channel ="you tube"
// console.log(channel.length)
// console.log(channel.toUpperCase())
// console.log(channel.charAt(3))
// console.log(channel.indexOf("u"));


const gameName1 = "ChaiCode"
const newString = gameName1.substring(0,4)
// console.log(newString);

const anotherString = gameName1.slice(-4)
// console.log(anotherString);

const stringOne = "   Sujal Singh   "
// console.log(stringOne)
// console.log(stringOne.trim())

 const url = "https://sujal.com/javascript%20course"
//  console.log(url.replace('%20', '-'))

const url1 = "https://sujal.com/javascript-course"
// console.log(url.includes("javascript"));

const gameName2 = "Chai-aur-code"
// console.log(gameName2.split("-"));

// const balance = new Number(100)
// console.log(balance.toString().length);
// console.log(typeof balance)

const balance1 = new Number(200.8964)
// console.log(balance1.toFixed(2));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber1.toPrecision(2).length);

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

const score1 = 400
// console.log(score1.toString());

const balace2 = 123.8979
// console.log(balace2.toFixed(1));
// console.log(balace2.toPrecision(3));

const hundred = 10000000
// console.log(hundred.toLocaleString());

// +++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++


// console.log(Math.abs(-4))
// console.log(Math.round(4.6));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9));

const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1))+min) ++++++++++++++++++

 let myDate = new Date()
//  console.log(myDate)
//  console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
 
let myCreatedDate = new Date(2026, 1, 2)
// console.log(myCreatedDate.toDateString());

let myAnotherDate = new Date("2026-02-15")
//  console.log(myAnotherDate.toDateString());

let myCreatedDate2 = new Date("2026-02-3")
// console.log(myCreatedDate2.getTime())
// console.log(Date.now());
// console.log(Math.floor(Date.now() / 1000));

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1,2,3,4,5)

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(myArr)

// slice, splice

const myArr3 = [0, 1, 2, 3, 4, 5]
//console.log("A", myArr3);
// const myn1 = myArr3.slice(0,3)
//console.log(myn1);

const myn2 = myArr3.splice(0,3)
// console.log(myn2);
// console.log(myArr3);

const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);
 
const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log("Marvel heroes:", marvel_heroes)
// console.log("dc heroes:", dc_heroes);
// console.log("All heroes:", all_heroes);
// console.log("Length of all heroes:", all_heroes.length);

const indian_heroes = ["Shaktimaan", "krrrish"]
// console.log(indian_heroes.length);
// console.log(indian_heroes.pop(1));
// console.log("Indian heroes:",indian_heroes)

const cricket_players = ["AB devillers", "Chris gayle"]
const football_players = ["Cristiano Ronaldo", "Lionel Messi"]
const tennis_players = ["Federer", "Nadal"]
const all_athletes = [...cricket_players, ...football_players, ...tennis_players]
// console.log(all_athletes)
// console.log(all_athletes.length);

const user_orders = ["laptop", ["mouse", "keyboard"],["tshirt", ["jeans", "jacket"]]]
const clean_orders = user_orders.flat(1)
// console.log(clean_orders);
// console.log(clean_orders.length);

let my_name = "Javscript"
// console.log(Array.isArray(my_name))
// console.log(Array.from(my_name));
// console.log(Array.from({name: "Javascript"}));

let my_city = "Delhi"
// console.log(Array.isArray(my_city))
let city_letters = Array.from(my_city)
// console.log(city_letters);

let course = "React"
// console.log(Array.isArray(course));
let course_letters = Array.from(course)
// console.log(course_letters)

let score = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score, score1, score3))

let player = "Virat Kohli"
let score0 = 183
let matches = ["odi","t20"]
let player_profile = Array.of(player, score0, matches)
// console.log(player_profile);


// singleton
// Object literals
const jsUser = {
    name: "Sujal", 
    "full name": "sujal negi",
    age: 45, 
    location: "Dehradun"
}
// Object.freeze(jsUser)
jsUser.age = 34
// console.log(jsUser.name)
// console.log(jsUser["name"]);
//  console.log(jsUser.age);
// console.log(jsUser["location"]);

const mySym = Symbol("key1")
const symUser = {
    name: "Sujal",
    [mySym]: "mykey1"
}
// console.log(symUser[mySym]);
// console.log(symUser);

const s1 = Symbol("id")
const user = {
    [s1]: 12345
}
// console.log(user.s1);
// console.log(user[s1]);

const mySecret = Symbol("Secret key")
const student = {
    name : "Sujal",
    "full Address": "Dehradun , UK",
    marks : 84,
    [mySecret]: "sujal chor haiii"
}
 Object.freeze(student)
student.marks = 100

// console.log(student.marks);
// console.log(student["full Address"]);
// console.log(student[mySecret]);

const tinderUser = new Object()
const tinderUser2 = {}

tinderUser.id = "123abs"
tinderUser.name = "Sujjju"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    Fullname: {
        userfullname: {
            firstname: "sujal",
            lastname: "chor"
        }
    }
}
// console.log(regularUser);

// Object.assign


const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj7 = {1: "Chor", 2: "hai"}
const obj8 = {3: "Sale", 4: "tu"}
const combinedObj = {...obj7, ...obj8}
// console.log(combinedObj);

const tinderUser3 = {
    name: 'sujal',
    id: '1223abs',
    isLoggedIn: false
}

// console.log(Object.keys(tinderUser3));
// console.log(Object.values(tinderUser3));
// console.log(tinderUser3.hasOwnProperty("isLoggedIn"));

const course1 = {
    coursename: "js in hindi",
    price: 5000,
    courseInstructor: "Gitesh"
}
// console.log(course1.courseInstructor);
const {courseInstructor: Instructor } = course1
//  console.log(courseInstructor);
//  console.log(Instructor);

function loginUser(username) {
    return `${username} just logged in! `; }
    // console.log(loginUser("Sujal"))

// previous missing topic ++++++++++++++++++++++++++++++++++++++++++// name : adding function in objects

 
const student1 = {
    name: "Aman",
    course: "Web Dev"
}
student1.greeting = function() {
    // console.log("Welcome to the class!!!")
}

//  function and parameters+++++++++++++++++++++++++++++

function addTwoNumbers (Number1, Number2) {
    let result = Number1 + Number2
    return result
}
 const result = addTwoNumbers(5,10)
//  console.log("Result yehh haiii:" , result)

function loginUserName(username = "Sam") {
    return `${username} just logged In `
} 
// console.log(loginUserName("Sujal"));

function calculateCartPrice(...num1) {
    return num1
}
//  console.log(calculateCartPrice(100, 200,300 , 400))

const user1 = {
username: "sujal",
price: 999
}

function printUserDetails(userData) {
    // console.log(`Username is ${userData.username} and price is ${userData.price}`);
}
printUserDetails(user1)

// printUserDetails ({username: "sujal", price: 399}) 

const myNewArray = [200, 400, 100, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

// Global scope and block/local scope ++++++++++++++++++++++++++

if(true){let a = 10
const b = 20
var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


// var globalVar = 500
let globalVar = 500
if (true) {
    // var globalVar = 20
    let globalVar = 20 
} 
// console.log(globalVar);


function one() {
    const username = "sujal"
 function two() {
    const website = "You tube"
    // console.log(username)
}
// console.log(website);
 two()

}  
one()

if (true) {
    const username = "sujal" 
    if (username === "sujal" ) {
        const website = " YouTube"
        // console.log(username + website);
        
    } 
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++ interesting +++++++++++++++++

addone(5)
function addone(num) {
    return num + 1
}
//  console.log(addone(5))

// addtwo(5)
const addtwo = function(num) {
    return num + 2
 }
// addtwo(5)

// This and arrow function +++++++++++++++++++

const user3 = {
    username: "Sujal", 
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , welcome to this website`);
         console.log(this);
        
    }

}

//  user3.WelcomeMessage()
//  user3.username = "sammy"
//  user3.WelcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Sujal"
//     console.log(this.username);
// }
// chai() 

// const chai = function () {
//     let username = "Sujal"
//     console.log(this.username);    
// }
// chai()

const chai =  () => {
 let username = "Sujal"
 console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)
const addTwo = (num1, num2) =>  ({username: "sujal"})

// console.log(addTwo(3, 4))

// Immediately invoked functions expressions (IIFE)

function chai1 () {
    //  console.log("DB CONNECTED"); 
} 
// chai1()

(function chai1 () {
    //  console.log(`DB CONNECTED`); 
}) ();

( (name) => {
    //  console.log(`DB CONNECTED TWO ${name}`); 
}) (`Sujal chor`)


// Control floww in javascript +++++++++++++++++++++++++++++++


const temperature = 41
// if (temperature === 40) {
//     console.log("less than 50")
// } else {
// console.log("Temperature is greater than 50");
// }

// const scoreOne = 200
// if (scoreOne > 100) {
//     const power = "Fly"
//     console.log(`User Power: ${power}`);    
// }


// const balance = 1000
// if (balance > 500) console.log("Test") , console.log("Test2"); ++++++++++++++++++

// if (balance < 500) {
//     console.log("Less than 500");

// } else if (balance <750) {
//     console.log("Less than 750"); 

// } else if (balance < 900) {
//     console.log("Less than 900"); 

// } else {
//     console.log("Less than 1200");
    
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromGmail = true
// if (userLoggedIn && debitCard && 2 ==3) {
//     console.log("Allow to buy courses");
    
// } 
// if (loggedInFromGmail || loggedInFromGoogle) {
//     console.log("User Logged In");
    
// }

    // switch statement +++++++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("Janaury");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;

    default:
        console.log("Default case match");
        break;
}

























