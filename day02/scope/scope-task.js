// 변수 num1과 num2의 값을 바꿔주는 함수 만들기
// ex) a = 10, b = 20 일 때
// changeNumber(a, b) 함수를 사용하면 값을 바꿔준다.
// a = 20, b = 10

globalThis.a = 10;
globalThis.b = 20;

const changeNumber = (a,b) => {
    globalThis.a = 20;
    globalThis.b = 10;
}
changeNumber(10, 20)
console.log(`a = ${a}, b = ${b}`)


// 강사님 풀이

// globalThis.a = 10
// globalThis.b = 20
// globalThis.temp = 0

// function swap(num1, num2){
// globalThis.temp = num1;
//   globalThis.a = num2;
//   globalThis.b = globalThis.temp; 
// }

// console.log(a, b)
// swap(a, b)
// console.log(a, b)




