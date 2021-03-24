// 3. String repetition
// Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
// Example:
// console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
// console.log(rokket('abc', 2)) // this outputs 'abcabc'

function rokket(A, N) {
    // Codigo "manual"

    // let newString = ""
    // let i = N
    // while (i != 0) {
    //     newString += A
    //     i -= 1
    // }
    // return newString
    
    return A.repeat(N)
}

console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'

console.log(rokket('node', 5)=='nodenodenodenodenode') // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)=='abcabc') // this outputs 'abcabc'