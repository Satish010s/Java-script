//syntax 
/*

for(initialization ; condition ; increment/decrement){
//code here
}

*/
//example
/*
for(let i=0 ; i< 5 ; i++){
    if(i===4){
        console.log(i)
    }
    console.log("printing all index value")
    console.log(i)
}

// while loop
let x=45
while(x !=0){
    console.log(x)
    x--; //it will print in decrement order
}

// Do while loop

let a=0
do{
    console.log(a)
}while(a>0)

*/
//display the suumm of natural numbers
// let sum=0
// for(let i=1 ;i<=100 ; i++){
//     sum += i
// }
// console.log(sum)

// for in loop
// it is used toiiterate over the properties of an object 
let obj={
    Name : "Satish", 
    Branch : "CSE",
    Reg_no : 24105128036,
    Age : 18
};
console.log("Student details")
for(let key in obj){
    console.log(key + "-" + obj[key])  // key the property to access 
}    /// obje[key] to access the value of the property of the object 

//write a program to cunt the property in the object
let college={
    Coursev : "B-tech",
    students :  "Tcehnical",
    No_Faculty : 50,
    No_ofStudents : 40
};
let count=0
for(let i in college){
    count++
}
console.log(count) //output 4

//find the key with the highest value
let sales={
    jhon : 300,
    satish : 400,
    rahul : 500,
    gulshan : 600
};
let maxkey=""
let maxvalue=0
for(let i in sales){
    if(sales[i]> maxvalue){
        maxvalue=sales[i]
        maxkey=i
    }
}
console.log(maxkey + "->" + maxvalue) // output gulshan->600

