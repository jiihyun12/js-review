// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력하기
const arr1 = new Array(10).fill(0);
// console.log(arr1);
const arr2 = arr1.map((data,i)=>i+1);
// console.log(arr2);
const arrResult1 = arr2.filter((data)=>data%2==0);
console.log(arrResult1);


// 2) 1~100까지 합을 출력
const arrFill100 = new Array(100).fill(0);
// console.log(arr100);
let result = 0;
arrFill100.map((data,i)=>result += (i+1));
console.log(result);


// 3) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678
const phoneNnumber = "010-1234-5678";
const splitPhoneNumber = phoneNnumber.split("-");
// console.log(splitPhoneNumber);
splitPhoneNumber[1] = "****";
console.log(splitPhoneNumber.join("-"));






// map 쓰지 않고 풀어보기

// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력하기
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arr1.length; i++){
//   let value = arr1[i];
//   if(value % 2 === 0) {
//     console.log(value)
//   }
// }

// const arr1 = new Array();
// 추가
// for(let i = 0; i < 10; i++){
//   arr1.push(i + 1)
// }

// 반복 후 출력
// for(let i = 0; i < arr1.length; i++){
//   if(arr1[i] % 2 === 0) console.log(arr1[i])
// }

// const arr1 = new Array(10).fill(0)
// 추가
// for(let i in arr1){
//   arr1[i] = parseInt(i) + 1
// }

// for(let i of arr1){
//   i % 2 === 0 ? console.log(i) : "";
// }

// 2) 1~100까지 합을 출력
// const arr2 = []
// for(let i = 0; i < 100; i++){
//   arr2.push(i + 1)
// }

// let result = 0;
// for(let i = 0; i < arr2.length; i++){
//   result += arr2[i];
// }
// console.log(result)

// const arr2 = new Array(100).fill(0)
// for(let i in arr2){
//   arr2[i] = Number(i) + 1
// }

// let result = 0;
// for(let i of arr2){
//   result += +i
// }

// console.log(result)

// 3) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678

// const phone = "010-1234-5678"
// const phoneArr = phone.split("-")
// phoneArr[1] = "****";
// console.log(phoneArr.join("-"))

// splice()
// console.log(phoneArr)
// const prevData = phoneArr.splice(1, 1, "****")
// console.log("prevData", prevData)
// console.log(phoneArr)