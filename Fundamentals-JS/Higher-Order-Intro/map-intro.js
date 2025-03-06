//
let arr1 = [1, 2, 3]
let arr1Mult = arr1.map (element => element *2)
console.log(`Here is arr1:\n${arr1}`)
console.log(`Here is an array using elements of arr1 to make arr1Mult:\n${arr1Mult}`)
console.log(`To show that there was not a mutations here again is arr1:\n${arr1}`)

//
let arr2 = ['a', 'b', 'c']
let arrWords = [`apple`, `about`, `cat`]
let arr2Map = arr2.map (element => {
    for (let word of arrWords) {
        if (!word.includes(element)) {
            return null
        }
    }
    return element
}).filter (element => element !==null)
console.log(`Here is an array of the elements in arr2 if they are found in each string in arrWords:\n${arr2Map}`)

//
let arr3 = ['a', 'b', 'c'];
let arrWords2 = ['apple', 'about', 'cat'];

let arr3Map = arr3.filter(element => 
    arrWords2.every(word => word.includes(element))
);

console.log(`Here is an array of the elements in arr3 if they are found in each string in arrWords2:\n${arr3Map}`);

//
let arr4 = [1, 2, 3, 4, 5]
//let arr4Squared = arr4.map (element => {return element * element})
let arr4Squared = arr4.map (element => element * element)
console.log(`arr4 squared with map ${arr4Squared}`)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const pangram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

let resultEvery = nums.every (a => a >= 1)
let resultEveryPan = pangram.every (a => a.length < 6)
console.log(resultEvery)
console.log(resultEveryPan)

let resultFind = nums.find (a => a === 0)
console.log(resultFind)

let resultFindIndex = nums.findIndex (a => a === 2)
console.log(resultFindIndex)

/*
The key thing to understand is that forEach always returns undefined. 
It's designed for performing side effects (like console logging) 
and doesn't collect or return any values. 
If you want to transform an array and get a new array back, you should use map instead.
*/
let resultForEach = nums.forEach ((a) => console.log(a * 2))
console.log(resultForEach)

let resultSome = nums.some (a => a < 3)
console.log(resultSome)

