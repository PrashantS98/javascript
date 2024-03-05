// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output
//JavaScript return statement is used to return a particular value from the function. The function will stop the execution when the return statement is called and return a specific value. The return statement should be the last statement of the function because the code after the return statement won't be accessible.

//syntax
/*
function addTwoNum(num1,num2) {
    console.log(num1+num2)
}

addTwoNum(3,4)      //  o/p => 7
addTwoNum(3,"4")    //  o/p => 34
addTwoNum(3,"a")    //  o/p => 3a

console.log(addTwoNum(3,8))  // 11 undefined  // why undefind? => because this function does not return any value
 //if we use return statement in the function then function return value

 // for example

 function addTwoNum1(num1,num2) {
    const result = num1+num2
    return result
}

addTwoNum1(1,5)    //  we call the function but not print anything

console.log(addTwoNum1(5,5))  // at this time we call the function and print the result
*/
/*
//Rest operator  :  It enables us to handle a variety of inputs as parameters in a function. Because it is used to combine many items, the rest operator is very helpful during array and object destructuring.

function allnum(val1, val2, ...num1) {
    return num1;
}

const res = allnum(10,20,30,40,50);
console.log(res)  // [ 30, 40, 50 ]
*/

// use object in return function
/*
const car = {
    model: "TATA PUNCH EV",
    price: 1500000
}

function descCar(anyfun) {
    return `${anyfun.model} is best electric car and its price is ${anyfun.price}.`
}

console.log(descCar(car))
 
// we can use object withour creatinng object

const res = descCar({
    model: "Tesla",
    price: 10000000
})

console.log(res)
*/
/*
// using array

const numArray = [10,20,30,40,50]

function returnLastNo(getArr) {
    return getArr.pop()
}

console.log(returnLastNo(numArray))   // 50
*/


