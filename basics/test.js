// variable and constance
/*
const accountId = 1111   // can not change 
let accountEmail = "prashant@gmail.com" // we can't change with in the block of the scope. out of the scope we can change
var accountPass = "123w3e"  //  prefer not to use var because of issue in block scope and functional scope
accountCity = "Mumbai"
let accountState;   //if you not assign the value then value is undefined

console.log("value before change")
console.table([accountId,accountEmail,accountPass,accountCity,accountState])
*/
// accountId = 2  // we can not change variable which is defined in const
//console.log(accountId)
/*
console.log("value After change")
accountEmail = "suryawanshi@gmail.com"
accountPass = "asddeqe"
accountCity = "Pune"
accountState = "maharashtra"

console.table([accountId,accountEmail,accountPass,accountCity,accountState])
*/
//--------------------------------------------------------//

//Data Types 

 //"use strict"; // treat all JS code as newer version

 /* 
  Primitive Data Type
  number => range of memory address : 2 to power of 53
  bigint
  straing = ""
  boolean  => yes/ no
  null => Its standalon value
  undefined => 
  symbol => unique

  object = 
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  */

//=================== String==================
/*
let str = "Prashant"
console.log(str.length)
console.log(str.charAt(5))  //access character from given position
console.log(str[5]) // access character from given position
console.log(str.toUpperCase()) // convert given staring into upper case


const a = "a";
const b = "b";
if (a < b) {,
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
*/
//=================== maths ==================
/*
console.log(Math);
console.log(Math.abs(-4));  //Returns the absolute value of a number. The absolute value of a number is the number without its sign.
console.log(Math.round(4.2));  //the ROUND function rounds down any portion of its first argument that is smaller than half a unit of the least significant digit or time unit within the precision of the second argument, but any portion of the first argument that is equal to or greater than half a unit is rounded up.
console.log(Math.ceil(4.2));  // taking highest value
console.log(Math.floor(4.9)); // taking lowest value
console.log(Math.min(4,6,5,3,2,8,1))  // return min value from given list
console.log(Math.max(1,5,6,9,3,4,8,7))  // retunr max value from give list
console.log(Math.random()) // return random value from 0 to 1

const min = 0;
const max = 10;
console.log(Math.floor(Math.random()*(max-min+1))+min)
*/
 
//======================= Date & Time ============================
/*
let myDate = new Date()
console.log(myDate)  //2024-02-28T02:33:50.845Z
console.log(typeof myDate)  //  object

console.log(myDate.toString());   // Wed Feb 28 2024 02:32:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // return Wed Feb 28 2024
console.log(myDate.toISOString());  // 2024-02-28T02:33:50.845Z
console.log(myDate.toLocaleDateString());  //  2/28/2024
console.log(myDate.toLocaleString());  //  2/28/2024, 2:37:59 AM
console.log(myDate.toLocaleTimeString());  //  2:37:59 AM
console.log(myDate.toTimeString());  //  02:37:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON());  // 2024-02-28T02:37:59.740Z



let myCreatedDate = new Date(2023,0,23);  // In JS month start from 0
let myCreatedDate2 = new Date("2023-01-14");  // YYYYMMDD
let myCreatedDate3 = new Date("01-14-2023");  // MMDDYYYY

console.log(myCreatedDate2);  //  2023-01-14T00:00:00.000Z
console.log(myCreatedDate3);  //  2023-01-14T00:00:00.000Z
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

let myCreatedDate1 = new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString())  // 1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate1.getTime())  /// have many methods like getTime eg gatDay.getMonth 

let newDate = Date.now()
console.log(newDate)
// you can customise your date 
newDate.toLocaleString('default',{
  weekdays: "long"
})
console.log(newDate.toLocaleString())

*/
 