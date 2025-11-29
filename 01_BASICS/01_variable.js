const accountId = 25026 //can't be change
let accountEmail = "rakes@h.com" 
var accountPasswod = "12345"//we don't use var now due to block scope and functional scope problem
accountCity = "Mumbai"
let accountState;//undefined value by default

// accountId = 4 // not allowed
console.log(accountId);
console.table([accountEmail,accountId,accountPasswod,accountCity, accountState ])