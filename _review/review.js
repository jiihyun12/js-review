//  두 수를 더하고 홀수인지 짝수인지 비교한 후 출력하기

const evenOrOdd = (num1, num2, callback) => {
    callback(num1 + num2)
}
const isEven = (num1, callback) => {
   let result =  num1 % 2 == 0 ? "짝수" : "홀수"
   callback(`${result}입니다.`)
}
const prints = (value) => {
    console.log(value)
}
evenOrOdd(2,5,(result)=>{
    isEven(result,prints)
})


// 6) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력하기
const multy1 = (num1, num2, callback) => {
    callback(num1 * num2)
}
const multy2 = (num1, callback) => {
    let reusltNums = num1 * 2
    callback(reusltNums)
}
const print2 = (value) => {
    console.log(value)
}
multy1(3,2,(resultNums)=>{
    multy2(resultNums,print2)
})

//  10) 인수로 받은 값까지 누적합한 후 5의 배수인지 확인 후 출력


