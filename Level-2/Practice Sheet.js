//Q1. Write a program to find the sum of three numbers and
//  print the sum and also print the sign (+ or -) of the sum.

let a=parseInt(prompt("enter the number"))
let b=parseInt(prompt("enter the number"))
let c=parseInt(prompt("enter the number"))
let sum=0
sum=sum+a+b+c
console.log("the sum of all value is",sum)
if(sum>0){
    console.log("+")
}
else{
    console.log("-")
}

//write a program to sort thrree number in ascennding order

let x=parseInt(prompt("Enterr thr number "))
let y=parseInt(prompt("Enter thr number"))
let z=parseInt(prompt("Enter the number"))
if(x>y && x>z){
    if(y>z){
        console.log(x,y,z)
    }
    else{
        console.log(x,z,y)
    }
}

//Largest of five numbers
let p=parseInt(prompt("Enter the number "))
let q=parseInt(prompt("Enter the number"))
let r=parseInt(prompt("Enter the number"))
let s=parseInt(prompt("Enter the number"))
let t=parseInt(prompt("Enter the number"))
if(p>r && p>q && p>r && p>s && p>t){
    console.log(p)
}
else if(q>p && q>r && q>s && q>t){
    console.log(q)
}
else if(r>p && r>q &&  r>s && r>t){
    console.log(r)
}
else if(s>p && s>q && s>r && s>t){
    console.log(s)
}
else{
    console.log(t)
}