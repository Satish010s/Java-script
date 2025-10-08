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
let sum=0
for(let i=1 ;i<=100 ; i++){
    sum += i
}
console.log(sum)


