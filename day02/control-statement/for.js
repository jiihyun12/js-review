// for(let i = 0; i < 10; i++){
//     if(i==2){continue}
//     if(i==5){break}
//     console.log(i)
// }

// 브론즈
// 1~10까지 출력하기
for(let i = 0; i < 10; i++){
    console.log(i + 1)
}

// 5번 이름을 출력하기
const name = "함지현";
for(let i = 0; i < 5; i++){
    console.log(name)
}

// 1~100까지 짝수만 출력하기

for(let i = 1; i <= 100; i++){
    if(i%2 ==0 ){
        console.log(i)
    }
}


// 1~100까지 홀수만 출력하기
for(let i = 1; i <= 100; i++){
    if(i%2 == 1){
        console.log(i)
    }
}

// 실버
// 0~10까지 5만빼고 출력하기
for(let i = 0; i <= 10; i++){
    if(i == 5){continue}
    console.log(i)
}

// 골드
// 1~10까지 합을 출력하기
let result = 0;
for(let i = 1; i<=10; i++){
    result += i
    console.log(result)
}

// 012340123401234출력하기
let result2 = "";
for(let i = 0; i < 5; i++)[
    result2 += i
]
console.log(result2 + result2 + result2)


// 마스터 별찍기
//     *
//    ***
//   *****
//  *******
// *********


let result4 = ""
for(let i = 0; i < 10; i+=2){ // 피라미드의 각 줄을 반복
    console.log(`i = ${i}`)
  for(let j = 10; j > i; j -= 2){ // 공백 추가
    console.log(`j=${j}`)
    result4 += " "
  }
  for(let k = 1; k < i; k++){ // 별 추가
    console.log(`k=${k}`)
    result4 += "*";
  }
  result4 += "\n" // 한 줄이 끝나면 줄바꿈
}

console.log(result4) // 최종 결과

// let star2 = "*";
// console.log(" " + " " + " " + " "+star2)
// console.log(" "+ " "+" " +star2+star2+star2)
// console.log(" " + " "+star2+star2+star2+star2+star2)
// console.log(" " + star2+star2+star2+star2+star2+star2+star2)
// console.log(star2+star2+star2+star2+star2+star2+star2+star2+star2)



// 20250109 복습 ========================================

// 마스터 별찍기
//     *
//    ***
//   *****
//  *******
// *********

for(let i = 0; i < 5; i++){
    let stars = "";
    for(let j = 0; j <= i; j++){
        stars += "*";
    }
    console.log(stars)
}



