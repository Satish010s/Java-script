let a=80
let b=45
console.log("addition is ",a+b)
console.log("subtraction  is ",a-b)
console.log("Multiplication is ",a*b)
console.log("Division is ",a/b)
console.log("Modulus is ",a%b)

// increment and decrement
console.log("Increment and Decrement")

console.log("Increment is ",a++)
console.log("Increment is ",a)
console.log("Decrement is ",b--)
console.log("Decrement  is ",b)

console.log(a+=20) //a=a+20
console.log(b-=20) //b=b-20
console.log(a*=2) //a=a*2
console.log(b/=2) //b=b/2
console.log(a**=2) //a=a**2   exponential operator
console.log(a%=2) //a=a%2

// comparision operator
console.log("Comparision operator")

let x=45
let y=65
console.log(x==y)  //  false
console.log(x!=y)  // True
console.log(x===y)  //False (due to diffenerent data type)
console.log(x!==y) //True  
console.log(x>y) //False
console.log(x<y) //True
console.log(x>=y) //False
console.log(x<=y) //True

//logical operator
console.log("Logical operator")

console.log(x>y && y!=x) //False
console.log(x<y && y!=x)  //True
console.log(x<y || y==x) //False
console.log(x>y || y!=x) ///True
console.log(!(x>y)) //True
console.log(!(x<y)) //False
console.log(!!(x<y)) //True
console.log(!!(x>y)) //False
console.log(!!(x==y)) //False
console.log(!!(x!=y)) //True

//Ternary Operator
console.log("Ternary Operator")
let age=17
let result=(age>=18) ? "Eligible for vote" : " Not Eligible for vote"
console.log(result)
