// 5. Unique numbers
// Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
// arrays).
// Example:
// console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
// console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

function rokket(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return Array(...new Set(newArr))
}

console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

console.log(JSON.stringify(rokket([1, 2, 5], [2, 1, 6])) == JSON.stringify([1, 2, 5, 6])) // this outputs [1, 2, 5, 6]
console.log(JSON.stringify(rokket([1, 2, 3], [4, 5, 6])) == JSON.stringify([1, 2, 3, 4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]