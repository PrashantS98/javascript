// variable and constance

const accountId = 1111   // can not change 
let accountEmail = "prashant@gmail.com" // we can't change with in the block of the scope. out of the scope we can change
var accountPass = "123w3e"  //  prefer not to use var because of issue in block scope and functional scope
accountCity = "Mumbai"
let accountState;   //if you not assign the value then value is undefined

console.log("value before change")
console.table([accountId,accountEmail,accountPass,accountCity,accountState])

// accountId = 2  // we can not change variable which is defined in const
//console.log(accountId)

console.log("value After change")
accountEmail = "suryawanshi@gmail.com"
accountPass = "asddeqe"
accountCity = "Pune"
accountState = "maharashtra"

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

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

 
 