let num1 = 10;
let num2 = 20;
let num3 = 10;

// console.log((num1 + num2) * num3)

// console.log(++num1)
// console.log(num1)
// console.log("================")
// console.log(num1++)
// console.log(num1)

// let isTrue = true;
// let isFalse = false;

// console.log(!isTrue)

// 이항 연산자
// console.log(327 / 30)
// console.log(327 % 30)

let a = 100;
a += 100; 
// a = a + 100;
// console.log(a)

let b = 100;
b -= 30;
console.log(b)

let c = "안녕";
c += "하세요";
// console.log(c)

let num4 = 10;
let num5 = 20;
let num6 = "10";

// console.log(num4 != num5)
// console.log(num4 === num6)

let str1 = "낙타1000"
let str2 = "낙타" + 1000

// console.log(str1 === str2)

// let isTrue = 10 != 11

// console.log(isTrue && 20 === "20")
// console.log(!isTrue && 20)
// console.log(isTrue && 20)

// let num7 = 10
// false && num7++
// console.log(num7)

// console.log(0 && 10)
// console.log(false || 0 || 10)

// true || false // true
console.log(true || 10 || true || false)
// 10 != 11 || 10 && true
// 10 == 10 || data == 0 && 10

// let data = 0;
// let isTrue = "10" == 10
// 11 !== 11 || 20 && isTrue && data++
// console.log(data)


let result = 11 !== 11 ? "true일 때 실행할 값" : "false일 때 실행할 값"
console.log(result)



// 형변환(type conversion)
// typeof()
console.log(typeof(Number("10")))
console.log(typeof(Boolean(10)), Boolean(10))

// false가 아닌데 false로 취급 되는 값
console.log(Boolean(NaN))  // false
console.log(Boolean(null)) // false
console.log(Boolean(""))  // false
console.log(Boolean(" ")) // true

let num10 = 10;
console.log(typeof(num10.toString()), num10.toString())


let num11 = 10.1235484;
console.log(num11.toFixed(2))


