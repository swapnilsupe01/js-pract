const accountId = 12345
let accountEmail = "swapnil@google.com" //means meamory may value resrve hogi  value means=swapnil@google.com and memory name is accountEmail
var accountPassword = "78945"
accountCty = "Pune"
let accountState;  
// accountId = 2   //Assignment to constant variable value already so can not change 
// not allowed
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "supe@gc.com"
accountPassword = "852"
accountCity = "Mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);