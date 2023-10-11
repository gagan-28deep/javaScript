
// 1.
// let score = 33
// console.log(typeof score);

// 2.
// let score = "33"
// console.log(typeof score);

// // Number is a class
// let valInNumber = Number(score)    /// 33 output
// console.log(typeof valInNumber);

// 3.
// let score = "33abc"
// console.log(typeof score);

// // Number is a class
// let valInNumber = Number(score)    
// console.log(valInNumber)   // NaN , if not pure string number then conversion gives us Nan
//                         // But type of Nan is number
// console.log(typeof valInNumber);

// 4.

// let score = null
// console.log(typeof score);

// let valInNumber = Number(score)
// console.log(valInNumber)    // null to number conversion gives 0
// console.log(typeof valInNumber);

// 5.

let score = undefined
console.log(typeof score);

let valInNumber = Number(score)
console.log(valInNumber)    // undefined to number conversion gives Nan
console.log(typeof valInNumber);

// Null vs Undefined
// Undefined -> The variable is assigned but value is not assigned
// Null -> Itentionally we have assigned null

// Boolean -> 0 and 1 
//  amy string which can't be converted -> NaN as in conversion