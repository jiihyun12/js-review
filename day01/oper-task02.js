// 나이는 상수로 설정, 삼항 연산자
// 모든 값을 변수에 담아보기

// 나이가 19살 이상이면 "입장 가능"을 출력
// 19살 이하면 "입장 불가"를 출력

// 나이가 짝수면 "짝수"를 출력
// 나이가 홀수면 "홀수"를 출력

// 나이가 16살이면 "당첨"을 출력
// 아니면 "꽝입니다"를 출력

// 콘솔 결과 : [본인 이름]님은 [입장 가능]이며,
// [나이], [홀수], [꽝입니다.]

const age = 21;
const name = "함지현";

let up19 = age >= 19;
let ok = "입장 가능";
let no = "입장 불가"
let evenAge = age % 2 == 0 
let even = "짝수";
let odd = "홀수";
let age16 = age === 16;
let cong = "당첨";
let ooops = "꽝입니다";

let comeOn = up19 ? ok : no ;
let evenOrodd = evenAge ? even : odd;
let congOrOpps = age16 ? ooops : cong;

console.log(
    `[${name}]님은 [${comeOn}]이며, \n [${age}], [${evenOrodd}], [${congOrOpps}]`
)

