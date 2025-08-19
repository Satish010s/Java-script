let score="98abc"

console.log(typeof score) //output-> Number
console.log(typeof (score))// output-> Number
//both will give same result 
// we can write any of type -> typeof score or typeof (score)


// we close the score into "  "  then the result will be
// let score="98"
console.log(typeof score) //output ->String


//if we want to change the string into the number datatype  then
//write like this -given below:
let valueINnumber=Number(score)
console.log(valueINnumber) //->this will print the value of valueINnumber
//output will be= 98



console.log(typeof valueINnumber) //-> output=number

//let score="98abc" then it gives the output like-NaN
console.log(valueINnumber) //output-> NaN

//similarliy for boolean
let islogedIn=""
let booleanislogedIn=Boolean(islogedIn)
console.log(booleanislogedIn) //output-> 1
//if isloged =" " ->means it is empty then output will false
// 1=>true or 0=>flse
// ""=>false
//"satish"=>true

//similarliy for string
let someNumber=98
let stringsomeNumber=String(someNumber)
console.log(typeof stringsomeNumber) //output-> string
console.log(stringsomeNumber)//output-> 98
