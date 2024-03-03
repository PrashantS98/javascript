//array
// declaration

const arr = [0,1,2,3,4,5,true,'Prashant']
//console.log(arr)

const arr1 =  new Array(0,1,2,3,4,5)
console.log(arr1)

/* array are zero based indexing
   JS array creating shallow copies 
   Shallow copy : A shallow copy of an object is a copy whoes properties share the same reference of the source object from which the copy was made.
   Deep copy : A Deep copy of an object is a copy whoes properties do not share the same reference of the source object from which the copy was made.
*/

// Array Methods
/*
arr1.push(6)     // insert value at the end of the array
arr1.pop()       //  remove last element from array
arr1.unshift(0)  //  insert value at starting of array
arr1.shift()     //  remove 1st value from array

console.log(arr1)

console.log(arr.includes(9))  // check value present in array or not
console.log(arr.indexOf(9))   // if value is present in array return index of the value else return -1

const newArr = arr1.join()    // join method bind the array and convert into string
console.log(newArr)
console.log(typeof newArr)
*/

// slice And splice

/*
console.log("orignal arr", arr1)  // orignal arr [ 0, 1, 2, 3, 4, 5 ]

const sliceArr = arr1.slice(1,3) 
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log("sliceArr", sliceArr)  // sliceArr [ 1, 2 ]
console.log("orignal arr", arr1)   // orignal arr [ 0, 1, 2, 3, 4, 5 ]

const spliceArr = arr1.splice(1,3)
//The number of elements to remove.
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//@returns — An array containing the elements that were deleted.

console.log("spliceArr",spliceArr)  // spliceArr [ 1, 2, 3 ]
console.log("orignal arr", arr1)    // orignal arr [ 0, 4, 5 ]

//What is the difference between string slice and string splice?
//slice returns a piece of the array but it doesn't affect the original array.
// splice changes the original array by removing, replacing, or adding values and returns the affected values.
*/

//concat and spread

// push method add array as element in another array
//concat method  return new array 

//arr.push(arr1);
//console.log(arr)  // [ 0, 1, 2, 3, 4, 5, true, 'Prashant', [ 0, 1, 2, 3, 4, 5 ] ]

//const newArr = arr.concat(arr1)
//console.log(newArr)   // [ 0, 1, 2, 3, 4, 5, true, 'Prashant', 0, 1, 2, 3, 4, 5 ]

//spred operator
//const  allArr = [...arr,...arr1]
//console.log(allArr)  // [ 0, 1, 2, 3, 4, 5, true, 'Prashant', 0, 1, 2, 3, 4, 5 ]

//const another_Arr = [1,2,3,[4,5,6,[7,[6,4],5]],8,9,[1,3,4,5]]
//const real_another_arr = another_Arr.flat(Infinity)  // all array value coverted in single array
//console.log(real_another_arr)
/*[
   1, 2, 3, 4, 5, 6,
   7, 6, 4, 5, 8, 9,
   1, 3, 4, 5
 ]  
 */
/*
console.log(Array.isArray("PRASHANT"))   // return : false
console.log(Array.from("PRASHANT"))      // return : ['P', 'R', 'A','S', 'H', 'A','N', 'T']
console.log(Array.from({name: "Prashant"}))  // IMP  return empty array
*/
/*
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))  // [ 100, 200, 300 ]
*/

