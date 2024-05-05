//Dog Years Projct

//Step 1 my current age
const myAge = 35;

//Step 2 
let earlyYears = 2;

//Step 3 Convert first 2 years and reassign earlyYears
earlyYears *= 10.5;

//Step 4 assign variable later years
let laterYears = myAge - 2;

//Step 5 later Years assignment operation
laterYears *= 4;

//Step 6 log earlyYears and later Years to check work
console.log(earlyYears);
console.log(laterYears);

//Step 7 assign myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

//Step 8 assign myName to users name displayed in lower case. 
const myName = 'Robert'.toLowerCase()

//Step 9
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`);
