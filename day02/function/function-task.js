// "".indexOf() : 해당 문자의 index 번호를 리턴하는 메서드
// "".charAt() : 해당 인덱스의 값을 리턴하는 메서드
// "".length : 문자열의 길이를 알려주는 값

// console.log("abcd"[2])
// console.log("abcd".charAt(2))
// console.log("abcd".length)

// 브론즈
// 어떤 값을 받으면 값을 출력해주는 함수
// 3개의 정수를 받아서 3개를 모두 뺀 값을 리턴하는 함수

const printNums = (num1, num2, num3) => {
    return num1-num2-num3;
}
const result = printNums(10, 1, 1)
console.log(result)


// 실버
// 홍길동을 n번 출력하는 함수
const printHong = (input) => {
    let hong = "홍길동";
    for(let i = 0; i<input; i++){
        console.log(hong)
    }
}
printHong(2)

// 골드
// 1~n까지 홀수만 출력하는 함수
const printOdd = (num) => {
    for(let i = 0; i < num; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
printOdd(10)

// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// const countChar = (input, char) => {
//     let count = 0; // 문자의 개수를 저장할 변수
//     for(let i = 0; i <= input.length; i++){ // 문자열의 길이만큼 반복
//         if(input.charAt(i) == char){ // i번째 문자가 찾는 문자와 같다면
//            count++ // 개수를 증가
//         }
//     }
//     return count; // 최종 결과 
// }
// const result2 = countChar("abaa", "a")
// console.log(reuslt2)

const countChar = (input, char) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        console.log(`현재 문자: ${input.charAt(i)}`);
        if (input.charAt(i) === char) {
            count++;
        }
    }
    return count;
};
console.log(countChar("abaa", "a"));



// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
const korNums = "영일이삼사오육칠팔구";
const changeToInt = (input) => {
    let resultNum = ""; // 최종 결과 저장
    for(let i = 0; i < input.length; i++){ // 문자열의 각 문자 반복
        resultNum += korNums.indexOf(input.charAt(i)); // 해당 문자의 인덱스 찾기
    }
    return resultNum
}

console.log(changeToInt("사육팔구"))



// 정수를 한글로 바꿔주는 함수 ("1024" -> "일공이사")
const changeToHangle = (numbers) => {
    let hangles = "공일이삼사오육칠팔구";
    let result = ""
    for(let i = 0; i < numbers.length; i++){
      result += hangles.charAt(numbers.charAt(i))
    }  
    return result
  }
  
  console.log(changeToHangle("2557"))





