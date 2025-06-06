// num = 1

// switch(num){
//   case 1:
//     console.log("1일 때 실행할 문장")
//     // if(num == 1){
//     //   break;
//     // }
//     num *= 10
//     break;
//   case 2:
//     console.log("2일 때 실행할 문장")
//     num -= 10
//     break;
//   case 3:
//     console.log("3일 때 실행할 문장")
//     num += 100
//     break;
//   default:
//     console.log("모든 값에 해당되지 않을 때")
//     break;
// }

// console.log(num)




// 20250109 복습 ========================================

//switch문은 값 기반의 조건 처리를 위해 설계된 구조이다.

const num = 1; // 비교할 값

switch(num){ // num 값을 기준으로 조건을 비교
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default :
    console.log("잘못 입력하셨습니다.")
}

