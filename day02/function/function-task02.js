// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
// ex) 큰 값 00, 작은 값 00


let maxNum = 0;
let minNum = 0;
const getMaxMinNums = (value1, value2) => {

    if(value1>value2){
        maxNum = value1;
        minNum = value2;
    }
    if(value1<value2){
        maxNum = value2;
        minNum = value1;
    }
}
getMaxMinNums(10, 8);
const reuslt1 = `큰 값 ${maxNum}, 작은 값${minNum}`;
console.log(reuslt1);





// 2) 정수를 넘기면 홀수인지 짝수인지 알려주는 함수
// ex) oo은 홀수입니다.
const isEvenOrOdd = (number) => {
    const even = number % 2 == 0;
    const odd = number % 2 != 0;
    if(even){
        console.log(`${number}은(는) 짝수입니다.`)
    }else if(odd){
        console.log(`${number}은(는) 홀수입니다.`)
    }else{
        console.log(`${number}은(는) 숫자가 아닙니다.`)
    }
}
isEvenOrOdd(7)

// 3) 0, 1을 마구잡이로 5개 전달했을 때
// 0과 1개의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// ex) 0의 개수 3개, 1개 개수 2개

let count = 0;
let one = 1;
let zero = 0;

const countZeroAndOne = (...num) => {
    if(num == one){
        count++;
    } else if(num == zero){
        count++;
    }
    return num
    // return console.log(num)
    
}
countZeroAndOne(0,1,0,0,1)
console.log(`${one}의 개수${count}개, ${zero}의 개수${count}개`)

// 3번 풀이
// 3) 0, 1을 마구잡이로 5개 전달했을 때
// 0과 1개의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// ex) 0의 개수 3개, 1개 개수 2개
// const getCount = (num1, num2, num3, num4, num5) => {
//     let countZero = 5
//     let countOne = 0
//     let numbers = "" + num1 + num2 + num3 + num4 + num5
  
//     for(let i = 0; i < numbers.length; i++){
//       Number(numbers.charAt(i)) && countOne++;
//       // if(Number(numbers.charAt(i))) { countOne++; }
//     }
//     countZero -= countOne
//     return `0의 개수는 ${countZero}, 1의 개수는 ${countOne}`
//   }
  
//   console.log(getCount(1, 0, 0, 1, 1))
  