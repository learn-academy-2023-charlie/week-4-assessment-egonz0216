// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
  // PseudoCode:
    // input: an array of strings
    // output: a subset of the initial array, with the zero-indexed element removed, and the remaining elements in shuffled order.
    
    // process: use the .reverse() method along with .pop() to remove the element that was initially at index 0. We then have to create a function that randomizes the array, and in this case we will use the Fisher-Yates method, which is a for-loop that iterates through the array from the end to the start. It swaps the the element at index "i" with the element at index "j" which is generated wiht the math.floor and math.random. Then using a temporary variable, we assign it the value at index "i", then overwrite that value with the element at index "j"
    
    // Process 2: I created another function with the help of a mentor, becuase I couldn't properly understand the Fisher-Yates method and spent the majority of class time on friday trying to understand it to no avail. With the instructors help, i realized i could use the slice() method to get rid of the first index without having to dedicate an entire line of code to it. Then i used .sort() with a function as a parameter to randomize the resulting array. We subtract math.random from .5 to generate an either positive or negative number, effectively randomizing our array.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe ("shuffleShorty", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleShorty(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleShorty(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
// FAIL  ./code-challenges.test.js
// shuffleShorty
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms) 
// ReferenceError: shuffleShorty is not defined

// b) Create the function that makes the test pass.
// var i = arr.length, j, temp;
// while(--1 > 0) {
  // j = Math.floor(Math.random() * (i + 1))
  // temp = arr[j]
  // arr[j] = arr[i]
  // arr[i] = temp
// }
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// const shuffleShorty = (arr) => {
//   arr.reverse().pop()
//   for (let i = arr.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * (i + 1))
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
//   return arr
// }

const shuffleShorty = (arr) => {
  return arr.slice([1]).sort((a, b) => 0.5 - Math.random())
}


// console.log(shuffleShorty(colors1))





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
  // PseudoCode:
    // input: an object
    // output: a single number
    // process: createa  function endTally that will subtract the value of the downvotes from the values of the upvotes

// a) Create a test with expect statements for each of the variables provided.
describe ("endTally", () => {
  it ("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// FAIL  ./code-challenges.test.js
// shuffleShorty
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (4 ms)
// endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
//   ReferenceError: endTally is not defined

// b) Create the function that makes the test pass.
const endTally = (obj) => {
  return obj.upVotes - obj.downVotes
}
// console.log(endTally(votes1))
// console.log(endTally(votes2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
  // PseudoCode:
    // input: two arrays with strings as elements
    // output: a single array with no repeating elements
    // process: first create an empty array so we can use .push to populate it with unique elements. We check for unique elements using forEach to iterate through the array, and set the conditian to be if the element is NOT included in the new array, then we push that element into the new array. 


// a) Create a test with an expect statement using the variables provided.

describe("comboArr", () => {
  const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
  // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(comboArr(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// FAIL  ./code-challenges.test.js
// shuffleShorty
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.
// comboArr
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values (3 ms)
//   ReferenceError: comboArr is not defined

// b) Create the function that makes the test pass.
const comboArr = (arr1, arr2) => {
  let uniqueValues1 = []
  arr1.forEach(element => {
    if(!uniqueValues1.includes(element)){
      uniqueValues1.push(element)
    }
  })
  arr2.forEach(element => {
    if(!uniqueValues1.includes(element)){
      uniqueValues1.push(element)
    }
  })
  return uniqueValues1
}

//I HAD NO IDEA HOW TO USE THE SPREAD OPERATOR :( 

// console.log(comboArr(dataTypesArray1,dataTypesArray2))
// PASS  ./code-challenges.test.js
// shuffleShorty
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
// comboArr
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)