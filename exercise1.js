// 1. Composite function
// Write a function called "rokket" which produces the following output when called:
// console.log(rokket(2)(5)(3)) // this outputs 30
// console.log(rokket(4)(2)(2)) // this outputs 16
// console.log(rokket(8)(2)(1)) // this also outputs 16
// This function must work for any three integer numbers.

function rokket(n) {
    var n_sum = n
    function innerRokket1(n) {
        function innerRokket2(n) {
            n_sum *= n
            return n_sum
        }
        n_sum *= n
        return innerRokket2
    }
    return innerRokket1
}

console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16

console.log(rokket(2)(5)(3)==30) // this outputs 30
console.log(rokket(4)(2)(2)==16) // this outputs 16
console.log(rokket(8)(2)(1)==16) // this also outputs 16