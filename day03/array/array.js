// !!!! 중요한 챕터 !!!! //

// 배열의 선언
const array1 = [];
const array2 = new Array();
const array3 = new Array(2); // 칸 수를 알고 있을 때
const array4 = Array.of("1", "2", "3") // 배열의 초기값을 알고 있을 때
// console.log(Array)

// console.log(array1)
// console.log(array2)
// console.log(array3)
// console.log(array4)


// .length 
// 배열의 길이를 확인하는 프로퍼티
console.log(array3.length)


// .split() // string에서만 사용할 수 있는 메서드
// 전달된 매개변수를 기준으로 잘라서 배열로 리턴하는 메서드
// 아무것도 전달하지 않으면 모두 자른다.
const phoneNnumber = "010-1234-5678";
const array5 = phoneNnumber.split("");
// console.log(array5)


// join("") 
// 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴하는 메서드
const str1 = array5.join("");
console.log(str1);


// .replace(), .replaceAll() // string
// 첫 번째 전달된 매개변수를 전달한 두 번째 값으로 치환한다.
// 단, replace는 먼저 만난 값 하나를 변경한다.
// const str2 = str1.replace("-", " ");
// const str2 = str1.replaceAll("-", " ");
// console.log(str2)


// .push()
// 기존의 배열에 값을 추가하는 메서드
// const array1Length = array1.push(10)
// console.log(array1)
// console.log(array1Length)


// .concat()
// 두 개의 배열을 [새로운 배열]로 리턴한다.
// 특정 배열에 인자로 들어온 배열을 합칠 떄 사용한다.
// const array6 = array2.concat([10,20,30,40,50],["a", "b", "c"], [true, false]);
// const array6 = array2.concat([10,20,30,40,50]);
const array6 = array2.concat([10,20,30,40,50,60,70,80,90,100]);
// console.log(array6);


// rest parameter (ES6)
// 매개변수를 몇 개 받을지 모를 때 사용하는 문법
// const getNumbers = (...numbers) => {
//     return numbers
// }
// console.log(getNumbers(10,20,30,40,50,60,70,))


// .pop()
// 마지막 요소를 배열에서 제거한다.
// 제거한 요소를 리턴한다.
// console.log(array6);
// console.log(array6.pop());
// console.log(array6);


// .unshift()
// 맨 앞에 요소를 추가하는 메서드
// console.log(array6)
// console.log(array6.unshift(100))
// console.log(array6)

// .shift()
// 맨 앞에 요소를 제거하는 메서드
// console.log(array6)
// console.log(array6.shift())
// console.log(array6)

// .slice(start, end)
// start인덱스부터 end까지 요소를 얕은 복사해서 새로운 배열로 리턴한다.
// console.log(array6.slice(1,3)) // 마지막 인덱스는 포함하지 않는다.
// console.log(array6)
// console.log(array6.slice(1,4))
// console.log(array6.slice(3))
// console.log(array6.slice(-2)) // 뒤에서부터 2번 째
// console.log(array6.slice(-2, -1)) // 뒤에서부터 2번 째부터 뒤에서부터 1번째 까지


// .splice(start, deleteCount, add_item)
// start 인덱스 부터 deleteCount까지의 갯수를 삭제하거나,
// 원본 배열에 addItem을 추가 후 새로운 배열을 리턴한다.
// 또한 start 인덱스 부터 deleteCount까지의 값을 리턴한다.
// console.log(array6)
// console.log(array6.splice(1, 3))
// console.log(array6.splice(1, 3, 600, 700, 800))
// console.log(array6)


// .sort()
// 무작위로 들어간 데이터의 값을 정렬하는 메서트
const array7 = [100, 150, 15, 200, 65, 20, 400, 10]
console.log(array7.sort((a,b)=>a-b))


// .reverse()
// 배열의 순서를 바꿔주는 메서드
console.log(array7.reverse())


// .includes() // string, array
// 특정 요소를 배열의 항목에서 포함되어 있는지 판단하여 true false로 리턴하는 메서드
console.log(array7.inclides200)


//========================================================
// 배열의 고차 함수
// 반복문

// .forEach((value, index, array)=>{})
// 배열을 순차적으로 돌면서 값, 인덱스, 원본 배열에 접근할 수 잇게 해주는 반복문이다.
// 리턴 타입이 없으므로 기능만 수행한다.
const datas = new Array(10).fill(0)
datas.forEach((data, i , datas)=>{
    // console.log("data",data)
    // console.log("i", i)
    // console.log("datas", datas)
    datas[i] = i;
})

datas.forEach((data)=>console.log(data))



// .filter((value, index, array)=>{반드시 true 또는 false 리턴값이 필요하다.(조건식)})
// 배열을 순차적으로 돌면서 조건식에 만족하는 값만 모아서 새로운 배열로 리턴
const arr3 = datas.filter((data, i, datas)=> data% 10 === 0)
console.log(arr3);

const arr5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
arr5.filter((data)=>!(data === 50 || data === 70));

// .map((value, index, array)=>{반드시 리턴 값이 필요하다.})
// 반복을 순차적으로 돌면서 return된 값들로 새로운 배열로 리턴한다.
// 즉 배열의 값을 순차적으로 돌면서 수정할 떄 사용한다.
const arr4 = datas.map((value, i, datas)=> value + 1000)
console.log(arr4)

const result2 = arr5.map((value, index, arr5)=>{
    return valus * 2
})
console.log(result2)

// .find()
const rueslt3 = arr5.find((value, i)=>{
    return value === 20
})
console.log(result3)

// .some()
arr3.some((data)=>data === 20) ? "있습니다" : "없습니다";
