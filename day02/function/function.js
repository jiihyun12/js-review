// function printName() {
//     console.log("안녕하세요.저는 홍길동입니다.")
// }
// printName()

// 숫자를 받으면 숫자를 출력해준다.
// function printNumber(num){  // 매개변수, 파라미터 , 인자
    // console.log(num)
// }
// printNumber(10) // 인수, arguments



// function getTotal(num1){
//     for(let i= 0; i < num1; i++){
//         result += num1;
//     }
//     return result;
// }
// const total = getTotal(100);
// console.log(total)


// 이름을 5번 출력해주는 함수
// console.log("1번================")
// function printName() {
//     for(let i = 0; i < 5; i++){
//     console.log("함지현")}
// }
// printName()



// // 이름을 받아서 5번 출력해주는 함수
// console.log("2번================")
// function printNameToFive (name){
//     for(let i = 0; i < 5; i++){
//         console.log(name)
//     };
// };
// printNameToFive("함지현");

// // 2개의 정수를 받아서 2개를 콘솔에 출력해주는 함수
// console.log("3번================")
// function printNum (num1, num2) {
//     console.log(num1, num2)
// }
// printNum(3,4)

// // 1개의 정수를 받아서 정수까지 짝수의 모든 합을 구해서 값을 리턴해주는 함수
// console.log("4번================")
//      function sumEvenNum(num){
//         let sum = 0;
    
//         for(let i = 0; i <= num; i++){
//             let even = i % 2 === 0; 
//             if(even){ // 만약에 짝수면
//                 sum += i; // sum에 추가하기 
//             };
//         };
//         return sum; // 최종 값
//     };
//     const result2 = sumEvenNum(10); 
//     console.log(result2); 


// // 강사님 풀이=========================================

//     // 이름을 5번 출력해주는 함수
// function printNameToFive(){
//     for(let i = 0; i < 5; i++){
//       console.log("김세환")
//     }
//   }
  
//   printNameToFive()
  
//   // 이름을 받아서 5번 출력해주는 함수
//   function printName(name){
//     for(let i = 0; i < 5; i++){
//       console.log(name)
//     }
//   }
  
//   printName("홍길동")
  
//   // 2개의 정수를 받아서 2개를 콘솔에 출력해주는 함수
//   function printNumber(num1, num2){
//     console.log(num1, num2)
//   }
  
//   printNumber(10, 20)
  
//   // 1개의 정수를 받아서 정수까지 짝수의 모든 합을 구해서 값을 리턴(반환)해주는 함수
//   function totalEven(num){
//     let total = 0;
//     for(let i = 0; i <= num; i++){
//       if(i % 2 !== 0) continue;
//       total += i;
//     }
//     return total
//   }
  
//   let result3 = totalEven(20)
//   console.log(result3)
  

//===================================================================================

// 디폴트 파라미터
function printNumbers(num1=0, num2=0, num3 = 0, num4 = 0){
    return num1 + num2 + num3 + num4
}
console.log(printNumbers(10, 20))


// 기명함수, 익명함수
// function(){}

// 즉시실행함수
(function(){
    console.log("즉시 실행")
})()

// 화살표 함수(ES6)
function a (param1, param2){
    return param1
}

const b = (param1, param2) => { return param1} // 엔터를 치거나 로직이 길어질때 중괄호 사용
const c = (param1, param2) => param1 


