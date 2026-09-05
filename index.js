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

// console.log("Implicit plus:" , "5" + 2);
// console.log("Implicit minus: ", "5" - 2);
// console.log("Implicit multiply : ", "5" * 2);

// console.log(10 + null);
// console.log(10 + undefined);
// console.log("10" - 5);
// console.log(10 + true);
// console.log(10 - false);

console.log("loose check:", "5"== 5);
console.log("strict check", "5" === 5);

console.log("Test1:", "10" == 10);
console.log("Test2:", "10" === 10);
console.log("Test3:", 0 == false);



