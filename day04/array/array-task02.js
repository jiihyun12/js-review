// 1) 1 ~ 10까지의 정수 중 홀수만 담고, 출력하기
const arr1 = new Array(10).fill(0);
const arr2 = arr1.map((data, i)=>i + 1);
const arr3 = arr2.filter((data)=>data%2==1)
console.log(arr3);

// 2) 1 ~ 10까지 정수를 배열에 담고, x2를하여 출력하기
const arr4 = new Array(10).fill(0);
const arr5 = arr4.map((data,i)=>i+1);
console.log(arr5.map((data)=>data*2));

// const arr4 = new Array(10).fill(0)
// for(let i in arr1){
//   arr1[i] = parseInt(i) + 1
// }
// const result = arr4.map((data) => data * 2)
// console.log(result)



// 3) 한글을 숫자로
// ex) "일이삼사" => "1234"
const hangles = "영일이삼사오육칠팔구"

const input = "일이삼사";
const result5 = input.split("").map((data) => hangles.indexOf(data)).join("");
console.log(result5)



// 4) 숫자를 한글로
// ex) "1234" => "일이삼사"
const input2 = "1234";
const result6 = input2.split("").map((data)=>hangles.charAt(data)).join("");
console.log(result6);


// 5) 1 ~ 100까지 배열에 담고, 3의 배수만 출력하기
const arr6 = new Array(100).fill(0);
const arr7 = arr6.map((data, i)=>i + 1);
arr7.map((data)=>{
    if(data % 3 == 0){
        console.log(data)
    }
})


// 6) 문자열을 반대로 출력하기
// ex) "apple" => "elppa"
const apple = "apple";
console.log(apple.split("").reverse("").join(""))


// 7) 1 ~ 10까지 누적합 구하기 // 누적합할 때 reduce 써보기
const arr8 = new Array(10).fill(0);
const arr9 = arr8.map((data,i)=>i+1);
// console.log(arr9);
let result = 0;
arr9.forEach((data)=>{
   return result+=data
})
console.log(result)


// 8) 1~10까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경후 출력하기
const arr10 = new Array(10).fill(0);
const arr11 = arr10.map((data,i)=>i+1).filter((data)=>data%2==0);
// console.log(arr11)
console.log(arr11.map((data)=>data*3))


// 9) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
const arr12 = [10,20,30,40,50];
console.log(arr12.sort((a,b)=>b-a))


// 10) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
const arr13 = new Array(10).fill(0);
const arr14 = arr13.map((data, i)=>i +1);
const arr15 = arr14.map((data)=>data > 5 ? data * 2 : data)
console.log(arr15);



// 11) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) result : 1*3*5*7*9*...
const arr16 = new Array(30).fill(0);
const arr17 = arr16.map((data,i)=>i+1)
// console.log(arr17);
console.log(arr17.filter((data)=>data%2==1).join("*"))


// 12) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력하기
const arr18 = new Array(20).fill(0);
const arr19 = arr18.map((data,i)=>i+1);
// console.log(arr19)
const arr20 = arr19.slice(-5)
// console.log(arr20);
let result7 = 0;
arr20.forEach((data)=>{
   return result7+=data
})
console.log(result7);




// 강사님 풀이
// 1) 1 ~ 10까지의 정수 중 홀수만 담고, 출력하기
// new Array(10).fill(0).map((data, i) => i + 1).filter((data) => data % 2 === 1).forEach((data) => console.log(data))

// 2) 1 ~ 10까지 정수를 배열에 담고, x2를하여 출력하기
// const arr1 = new Array(10).fill(0)
// for(let i in arr1){
//   arr1[i] = parseInt(i) + 1
// }
// const result = arr1.map((data) => data * 2)
// console.log(result)

// 3) 한글을 숫자로
// ex) "일이삼사" => "1234"
// const hangle = "공일이삼사오육칠팔구"
// const input = "일육칠팔".split("")
// const result3 = input.map((c) => hangle.indexOf(c)).join("")

// 4) 숫자를 한글로
// ex) "1234" => "일이삼사"
// const input2 = "5900".split("")
// const result4 = input2.map(c => hangle[c]).join("")

// 5) 1 ~ 100까지 배열에 담고, 3의 배수만 출력하기
// const data = new Array(100).fill(0).map((data, i, datas) => i + 1)
// data.filter((data) => data % 3 === 0).forEach((data) => console.log(data))

// 6) 문자열을 반대로 출력하기
// ex) "apple" => "elppa"
// const result6 = "apple".split("").reverse().join("")
// console.log(result6)

// 7) 1 ~ 10까지 누적합 구하기
// const result7 = new Array(10).fill(0).map((data, i) => i + 1).reduce((prev, current) => {
//   return prev + current
// })
// console.log(result7)

// 8) 1~10까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경후 출력하기
// new Array(10)
//   .fill(0)
//   .map((data, i) => i + 1)
//   .filter((data) => data % 2 === 0)
//   .map((data) => data * 3)
//   .forEach((data) => console.log(data))

// 9) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
// Array
//   .of(10, 20, 30, 40, 50)
//   .sort((a, b) => a - b)
//   .reverse()
//   .forEach((data) => console.log(data))

// 10) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// const datas = new Array(10)
//   .fill(0)
//   .map((data, i) => i + 1)

// datas.forEach((data, i, datas) => {
//   datas[i] = data > 5 ? data * 2 : data 
//   console.log(datas[i])
// })
  
// console.log(datas)

// 11) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) result : 1*3*5*7*9*...
const result11 = new Array(30)
  .fill(0)
  .map((data, i) => i + 1)
  .filter((data) => data % 2 === 1)
  .join("*")

console.log(result11)


// 12) 1~20까지 배열에 담고 배열의 들어간 값 중
// 뒤에서 5개 값을 더한 후 출력하기
// const arr12 = new Array(20)
//   .fill(0)
//   .map((data, i) => i + 1)
//   .slice((-5))
//   .reduce((prev, cur) => prev + cur)

// console.log(arr12)