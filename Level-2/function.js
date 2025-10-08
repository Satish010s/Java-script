//write a functio to calculate the factorial of number
function factorial_of_no(k){
    if(k<=0) return 1
    return k* factorial_of_no(k-1)
}
console.log(factorial_of_no(7))

console.log("printing fibbonaci series")
function fibbonaci_series(n){
    if(n<=1) return n
    return fibbonaci_series(n-1) + fibbonaci_series(n-2)
}
console.log(fibbonaci_series(0))