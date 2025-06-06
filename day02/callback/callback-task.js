// 1) 두 수를 더해서 출력하기
const addNum = (num1, num2, callback) => {
    callback(num1 + num2)
}
const print1 = (value) => {
    console.log(value)
}
addNum(1,2,print1);


// 2) 성과 이름을 받아서 연결하고 출력해주는 함수
const getFullName = (lastName, firstName, callback) => {
    callback(lastName + firstName) 
}
const print2 = (value) => {
    console.log(value)
}
getFullName("함","지현",print2);


// 3) 두 정수의 덧셈 결과를 출력하기
const addNums = (num1, num2, callback) => {
    callback(num1 + num2)
}
const print3 = (value3) => {
    console.log(value3)
}
addNums(6,4,print3);


// 4) 두 정수의 곱셈 결과를 출력하기
const multiNums = (num1, num2, callback) => {
    callback (num1 * num2)
}
const print4 = (value4) => {
    console.log(value4)
}
multiNums(10,10,print4)


// 5) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력하기
const evenOrOdd = (num1, num2, callback) => {
    callback(num1 + num2);
}
const isEven = (num1, callback) => {
        let result = num1 % 2 === 0 ? "짝수" : "홀수";
        callback(`${result}입니다.`);
}
const print5 = (value) => {
    console.log(value)
}
evenOrOdd(2,2,(result)=>{
    isEven(result,print5)
})


// callback 2개
// 6) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력하기
const muiltNums = (num1, num2, callback) => {
    callback(num1 * num2)
}
const muiltNumsAgain = (muiltNum, callback) => {
    let muiltNumAgain = muiltNum * 2
    callback(muiltNumAgain)
}
const print6 = (value) => {
    console.log(value)
}
muiltNums(2,2,(muiltNumAgain)=>{
    muiltNumsAgain(muiltNumAgain, print6)
})


// 7) 두 정수의 값 중 작은 값을 반환하여 출력하기
const isMin = (num1, num2, callback) => {
    callback(num1 < num2 ? num1 : num2)
}
const print7 = (value) => {
    console.log(value)
}
isMin(3,5, print7)


// 8) 결제 상품 이름과 결제 상태를 전달 받아서 
// 결제 상태가 ture일 경우 결제 완료
// 결제 상태가 false일 경우 결제 취소를 출력하기

const payment = (productName, payStatem, callback) => {
    let paymentStat = payStatem ? "결제완료" : "결제 취소"
    callback(`${productName}은(는) ${paymentStat}`)
}
const print8 = (value) => {
    console.log(value)
}
payment("바닐라 딜라이트",true, print8)


// 9) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 알고리즘
// 문자열을 받는다.
// 문자열의 길이만큼 반복을 돈다.
// 문자를 찾아서 반대로 바꾼후 출력한다.
const changeNums = (char, callback) => {
    let result = "";
    for(let i = 0; i <= char.length; i++){
        result += char.charAt(i)
    }
    callback(result) 
}
const reverse = (foundChar, callback) => {
    callback(foundChar.split("").reverse("").join(""))
}

const print9 = (value) => {
 console.log(value)
}
changeNums("기러기오디오", (foundChar)=>{
    reverse(foundChar, print9)
})


// 10) 인수로 받은 값까지 누적합한 후 5의 배수인지 확인 후 출력
// 알고리즘
// 입력 받는다.
// 입력한 값까지 누적합을 계산한다. (for문)
// 누적합 된 결과가 5의 배수인지 확인한다. (삼항연산자)

const printNums = (inputValue, callback) => {
    let result = 0;
    for(let i = 0; i <= inputValue; i++){
        result += i
    }
    callback(result)
}
const isMultipleOfFive = (sumNums, callback) => {
    const fiveNums = sumNums % 5 == 0 ? "5의 배수입니다." : "5의 배수가 아닙니다.";
    callback(`${sumNums}는 ${fiveNums}`)
}

const print10 = (value) => {
    console.log(value)
}
printNums(10,(sumNums)=>{  // 1~10까지 합을 계산하고 콜백 실행
    isMultipleOfFive(sumNums, print10) // 콜백으로 받은 isMultipleOfFive(sumNums, callback) 실행. 5의 배수인지 확인 후 콜백 실행
})


// 11) 1~100까지 짝수만 더한 후 결과값에 2를 곱한 후 출력
// 알고리즘
// 1~100까지 짝수를 구한다.(for문)
// 만약에 짝수면 누적합한다. (for문에 if문 중첩)
// 결과값에 2를 곱한후 출력한다.

const sumEven = (callback) => {
      let result = 0;
      for(let i = 1; i <= 100; i++){
        let even = i % 2 == 0;
        if(even){ 
            result += i 
        };
      }
      callback(result);
    }
    
const multipleby2 = (num, callback) => {
    callback(num * 2)
}

const print11= (value) => {
    console.log(value)
  }

sumEven((result)=>{
  multipleby2(result, print11)
})



// 12) 2개의 정수중 최소값과 최대값을 비교한 후 큰 값에 2를 곱해서 출력
// 알고리즘
// 정수 두 개를 받는다.
// 최소값과 최대값을 비교한다.
// 큰 값을 찾는다.
// 결과값에 2를 곱해서 출력한다.

const isBiggerMuiltyTwo = (num1, num2,callback) => { 
    let maxNum;
    let minNum;

    if(num1>num2){
        maxNum = num1;
        minNum = num2;
    }else if(num1<num2){
        maxNum = num1;
        minNum = num2;
    }else if(num1==num2){
        return console.log("두 값은 같습니다.");
    }else{
        return console.log("잘못 입력하셨습니다.");
    }
    callback(maxNum);
};

const print12 = (result) => {
    console.log(result * 2);
};

isBiggerMuiltyTwo(50, 20, print12);




// 강사님 풀이 ==================================
// 다음 시간 35분
// const print = (result) => {
//     console.log(result)
//   }
  
// 다음 시간 35분
// const print = (result) => {
//     console.log(result)
//   }
  
  // 1) 두 수를 더해서 출력하기
  // const add = (num1, num2, callback) => {
  //   callback(num1 + num2)
  // }
  
  // add(10, 20, print)
  
  // 2) 성과 이름을 받아서 연결하고 출력해주는 함수
  // const getFullName = (lastName, firstName, callback) => {
  //   callback(lastName + firstName)
  // }
  
  // getFullName("김", "세환", function(fullName){
  //   console.log(fullName)
  // })
  
  // 3) 두 정수의 덧셈 결과를 출력하기
  // function addNumber(num1, num2, callback){
  //   callback(num1 + num2)
  // }
  
  // addNumber(30, 60, print)
  
  // 4) 두 정수의 곱셈 결과를 출력하기
  
//   const multiply = (num1, num2, callback) => {
//     callback(num1 * num2)
//   }
  
  // multiply(60, 10, print)
  
  // callback 2개
  // 5) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력하기
  // const isOddOrEven = (value, callback) => {
  //   callback(value % 2 === 0 ? "짝수입니다." : "홀수입니다.")
  // }
  
  // addNumber(30, 60, (result) => {
  //   isOddOrEven(result, (oddOrEven) => {
  //     print(oddOrEven)
  //   })
  // })
  
  // callback 2개
  // 6) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력하기
//   const multiplyByTwo = (num, callback) => {
//     callback(num * 2)
//   }
  
  // multiply(10, 20, (result) => {
  //   multiplyByTwo(result, print)
  // })
  
  // 7) 두 정수의 값 중 작은 값을 반환하여 출력하기
  // const getMinOrMax = (num1, num2, callback) => {
  //   let isSame = num1 === num2
  //   let same = "두 수가 같습니다."
    
  //   if(isSame) return same;
  //   let result = num1 > num2 ? `큰 값 ${num1}, 작은 값은 ${num2}` : `큰 값 ${num2}, 작은 값은 ${num1}`
  //   callback(result)
  // }
  
  // getMinOrMax(10, 20, print)
  
  // 8) 결제 상품 이름과 결제 상태를 전달 받아서 
  // 결제 상태가 ture일 경우 결제 완료
  // 결제 상태가 false일 경우 결제 취소를 출력하기
  // const payment = (productName, status, callback) => {
  //   let result = status ? `${productName}은 결제 완료` : `${productName}은 결제 취소`
  //   callback(result)
  // }
  
  // payment("컴퓨터", false, print)
  
  // 9) 문자열을 받아서 순서를 반대로 바꾼 후 출력
  
//   const reverse = (strings, callback) => {
//     let result = "";
//     for(let i = 0; i < strings.length; i++){
//       result += strings.charAt(strings.length - 1 - i)
//     }
//     callback(result)
//   }
//   reverse("abcd", print)
  
  
//   // 10) 인수로 받은 값까지 누적합 한 후 5의 배수인지 확인 후 출력
//   const getTotal = (count, callback) => {
//     let total = 0;
//     for(let i = 0; i <= count; i++){
//       total += i;
//     }
//     callback(total)
//   }
  
//   const isFiveStep = (total, callback) => {
//     // 5의 배수
//     let isFiveStep = total % 5 === 0;
//     let result = isFiveStep ? `${total}은 5의 배수가 맞습니다.` : `${total}은 5의 배수가 아닙니다`;
//     callback(result) 
//   }
  
//   getTotal(10, (total) => {
//     isFiveStep(total, print)
//   })
  
//   // 11) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력
//   const sumEven = (callback) => {
//     let total = 0;
//     for(let i = 0; i <= 100; i++){
//       if(i % 2 !== 0) continue;
//       total += i;
//     }
//     callback(total)
//   }
  
//   sumEven((total) => {
//     multiplyByTwo(total, print)
//   })
  
//   // 12) 2개의 정수 중 최소 값과 최대 값을 비교 한 후 큰 값에 2를 곱해서 출력
//   const getMinOrMax2 = (num1, num2, callback) => {
//       let isSame = num1 === num2
//       let same = "두 수가 같습니다."
      
//       if(isSame) return same;
//       let result = num1 > num2 ? num1 : num2;
//       callback(result)
//   }
  
//   getMinOrMax2(10, 20, (total) => {
//     multiplyByTwo(total, (result) => {
//       console.log(result)
//     })
//   })
  
  
  
  
  
  
  
  