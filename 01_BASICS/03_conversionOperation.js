let score  = "33abc"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score2 = null
console.log(typeof score2)
console.log(typeof(score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let score3 = undefined
console.log(typeof score3)
console.log(typeof(score3))

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)



let score4 = true
console.log(typeof score4)
console.log(typeof(score4))

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => treue; 0 => false
// "" => false
// "Rakesh" => true

let sum  = 33
let stringnum = String(sum)
console.log(stringnum)
console.log(typeof stringnum)

//****************************Operations ***********************
let value = 3
let negValue = -value
console.log(negValue)

// console.log(2-2)
// console.log(2+2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Rakesh"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)


