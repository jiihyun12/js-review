
// function a(name){
//     console.log(name + "님") // 매개변수 자리에 함수
//   }
  
//   const nameAddNim = (name, callback) => {
//     callback(name + "님")
//   }
  
//   const print = (value) => {
//     console.log(value)
//   }
  
//   nameAddNim("김세환", print)




// 두 수를 더해서 출력해주는 함수
const add = (num1, num2, callback) => {
    callback(num1 + num2)
}
const print = (value) => {
    console.log(value)
}
add(1,2,print)

// 이름을 받아서 이름을 출력해주는 함수 만들기
const addnim = (name, callback) => {
    callback(name + "님")
}
addnim("홍길동", (name)=>{
    console.log(name)
})