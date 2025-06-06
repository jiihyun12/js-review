
// let a = 10;
// function myFunc(){
//   let a = 20;
//   if(true){
//     let a = 30;
//     console.log("첫 번째 블록 a", a)
//   }
//   console.log("두 번째 블록 a", a)
// }

// myFunc()
// console.log("세 번째 블록 a", a)


// node.js는 전역 변수를 global 객체가 관리한다.
// webBrower에서는 전역변수를 window 객체가 관리한다.
// globalThis

globalThis.a = 10;
function myFunc(){
  let a = 20;
  if(true){
    globalThis.a = 100
    console.log("첫 번째 블록 a", a)
  }
  console.log("두 번째 블록 a", a)
}

myFunc()
console.log("세 번째 블록 a", globalThis.a, a)