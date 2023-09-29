let score = 28;
//let score11="33asd";  //string because it is in "" quote
//let score11=nul
let score11 = true;

//Two type of typeof 
//console.log(typeof score);
//console.log(typeof(score));

//console.log(score11);
// console.log(typeof score11);    // it is display typeof of score11  
// let value = Number(score11);  //conversion of score11 into the Number
// console.log(typeof value);
// console.log(value); //it is display an NaN(means Not a Number) fter the conversion


//let valueInNumber = Number(score);    //conversion of score into he Number 
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*
null is typeof is object 
but after conversion to Number that null turn into zero 
*/

/*
true is typeof is boolean 
but after conversion to Number that null turn into 1 
true =>1, false=>0
*/

let isLogged ="";   // 1=>true ; 0=>false
let booleanIsLogged = Boolean(isLogged);  //conversion into boolean 
 
//console.log(booleanIsLogged);
/*
"swap"=> give true value
*/
/*
""=>  give false value                 
*/

let someNum = 22;
let StringNum = String(someNum);
console.log(StringNum);    //display number 22
console.log(typeof StringNum);   //but Number us convert into string  