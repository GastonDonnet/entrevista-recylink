// 2. Longest string
// Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
// Example:
// const list = ['best', 'company', 'ever']
// console.log(rokket(list)) // this outputs 'company'

function rokket(list) {  
    return list.reduce((longestWord, word)=>{
        if (longestWord.length < word.length) {
            return word
        } else {
            return longestWord
        }
    }, list[0])
}

const list = ['best', 'company', 'ever']

console.log(rokket(list)) // this outputs 'company'

console.log(rokket(list)=='company') // this outputs 'company'
