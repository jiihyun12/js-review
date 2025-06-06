// let num = 10;

// if(num % 5 == 2){
//     console.log("나머지가 2값이 맞습니다.")
// }

// if(num==10){
//     console.log('num은 10입니다.')
// }

// if(num + 20 == 100){
//     console.log("100")
// }else if(num % 2 == 0 ){
//     console.log("짝수")
// }else{
//     console.log("알 수 없는 오류")
// }


// 실습

// 이름 : 여러분들의 성함 // 변수 또는 상수
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균, 학점, 구하기

// if문을 사용해서 평균 60점 이상은 합격, 60점 미만은 불합격 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

const name = "함지현";
const korScore = 80;
const mathScore = 70;
const engScore = 90;
const sciScore = 100;

const sum = korScore + mathScore + engScore + sciScore;
const avg = sum / 4;

const pass = "합격";
const notPass = "불합격";

const result = (`${name}님의 총점은 ${sum}, 평균은 ${avg}점으로`);

if(avg >= 60){
    console.log(`${result} ${pass}입니다.`)
}else{
    console.log(`${result} ${notPass}입니다.`)
}
