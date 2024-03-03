// singleton : literals object are not singleton but constructor object is singleton

/*Two types of objects
const myObj = {}  // literal object , not singleton object
const myobj1 = new Object() //  constructor object  ,  singleton object
*/ 
//object literals
/*
const mysym = Symbol("key_1")

   // literal method
const JsUser = {
    name: "Prashant",
    age: 25,
    [mysym]: "mykey1",
    "location" : "Thane",
    email: "prashant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mon","Sat"]
} 

*/
 //access the object value

 //console.log(JsUser.email)
 //console.log(JsUser["email"])

 //console.log(JsUser."location")  // not working
 //console.log(JsUser["location"])

 //symbol : how to access symbol
 //console.log(JsUser[mysym])  // return : mykey1

 //change value in object
/*
 JsUser.email = "prashant@gmail.com"
 console.log(JsUser["email"])
 console.log(JsUser)
*/
 /*
 return : 
 {
  name: 'Prashant',
  age: 25,
  location: 'Thane',
  email: 'prashant@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'mon', 'Sat' ],
  [Symbol(key_1)]: 'mykey1'
}*/
/*
// how to freez the object ?
 Object.freeze(JsUser)
 JsUser.email = "sushant@gmail.com"  // after freezing the object we cant change the value
 console.log(JsUser["email"])  //  prashant@gmail.com
*/
 // function define
/*
 JsUser.greeting = function(){
    console.log("Hello JS User")
 }

 JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`)
 }


 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
*/

//==========================================================================================//


// constructor object

// create object
 const instaUser = {}
 instaUser.id = "123abc";
 instaUser.name = "Tommy";
 instaUser.isLoggedIn = false;

 //console.log(instaUser)     //  { id: '123abc', name: 'Tommy', isLoggedIn: false }

 const regularUser = {
   email: "prashant@gmail.com",
   fullname: {
      userfullName: {
         fisrtname: "prashant",
         lastname: "Suryawanshi"
      }
   }
 }

 //console.log(regularUser)
 //console.log(regularUser.fullname.userfullName.fisrtname)

 const obj1 = {1:"a",2:"b"}
 const obj2 = {2:"c",4:"d"}

 const obj3 = {obj1, obj2}
 //console.log(obj3) //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'c', '4': 'd' } }

 // object = object.assign(target,sources)
 const obj4 = Object.assign({},obj1,obj2)
 //console.log(obj4)  //{ '1': 'a', '2': 'c', '4': 'd' }

 //spread operator
 const obj5 = {...obj1, ...obj2}
// console.log(obj5)   //{ '1': 'a', '2': 'c', '4': 'd' }

//console.log(Object.keys(instaUser))  // [ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(instaUser))  //   [ '123abc', 'Tommy', false ]
//console.log(Object.entries(instaUser))  //[ [ 'id', '123abc' ], [ 'name', 'Tommy' ], [ 'isLoggedIn', false ] ]

//object destrucring

const student = {
   name: "prasahnt",
   age: 25,
   class: "12th",
   present: true,
   classTeacher: "ABC"
}

const {classTeacher} = student  //  classTeacher is key of student using this method we can access value of the key
console.log(classTeacher)  // ABC

const {classTeacher: Teacher} = student
console.log(Teacher)  // ABC
