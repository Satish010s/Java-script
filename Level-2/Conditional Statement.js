console.log("Conditional Statement")
let age=prompt("Enter your age") // Taking Input from user
age=Number.parseInt(age)  // converting string to number
console.log(age)
if(age>=18){ 
    console.log("Eligible for vote")
}
else{
    console.log("Not ELigible for vote")
}

// This code will run in browser only because of prompt function

let Marks=prompt("Enter your marks")
Marks=Number.parseInt(Marks)
if(Marks>=90){
    console.log("A+ Grade")
}
else if(Marks>=80){
    console.log("A Grade")
}
else if(Marks>=70){
    console.log("B+ Grade")
}
else if(Marks>=60){
    console.log("B Grade")
}
else if(Marks>=50){ 
    console.log("C Grade")
}
else{
    console.log("Fail")
}
// Nested if else

    // Checking that given number is positive or negative
let num=prompt("Enter a number")
num=Number.parseInt(num)
if(num>=0){
    if(num==0){
        console.log("Number is zero")
    }
    else{
        console.log("Number is positive")
    }  
}
else{
    console.log("Number is negative")
}
// Switch case