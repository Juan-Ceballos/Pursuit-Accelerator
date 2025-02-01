let arr1 = [1, 2, 3]
let arr1Mult = arr1.map (element => element *2)
console.log(`Here is arr1:\n${arr1}`)
console.log(`Here is an array using elements of arr1 to make arr1Mult:\n${arr1Mult}`)
console.log(`To show that there was not a mutations here again is arr1:\n${arr1}`)

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


let arr3 = ['a', 'b', 'c'];
let arrWords2 = ['apple', 'about', 'cat'];

let arr3Map = arr3.filter(element => 
    arrWords2.every(word => word.includes(element))
);

console.log(`Here is an array of the elements in arr3 if they are found in each string in arrWords2:\n${arr3Map}`);
