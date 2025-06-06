// 1) 인수값으로 받은 3개중 홀수만 더해주는 함수
const totalOdd = (num1, num2, num3) => {
    let result = 0;
    if(num1 % 2 === 1){
      result += num1
    }
    if(num2 % 2 === 1){
      result += num2
    }
    if(num3 % 2 === 1){
      result += num3
    }
    return result;
  }
  
  // 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더한 후 값을 주는 함수
  const evenSumToCount = (count) => {
    let result = 0;
    for(let i = 0; i < count; i++){
      if(i % 2 === 0){
        result += 0;
      }
    }
    return result;
  }
  
  // 3) 입력한 값중 a를 제거해주는 함수
  // 단 .split(""), .replace(), replaceAll()을 사용하지 않는다.
  // ex) "가a나a다a라a마a바a사" -> "가나다라마바사"
  // const removeA = (str) => {
  //   let result = "";
  //   for(let i = 0; i < str.length; i++){
  //     if(str.charAt(i) === "a") continue;
  //     result += str.charAt(i)
  //   }
  //   return result;
  // }
  
  // console.log(removeA("가a나a다a라a마a바a사"))
  
  // 4) 입력한 값이 실수인지 정수인지 알려주는 함수
  const getFloatOrInt = (num) => {
    let isInt = num === parseInt(num)
    return isInt ? "정수입니다" : "실수입니다"
  }
  
  console.log(getFloatOrInt(1.5))
  
  // 5) 입력받은 문자를 뒤집어주는 함수
  // ex) "abcdefg" -> "gfedcba" 
  // 단 .reverse()를 사용하지 않는다.
  console.log("abcdefg")
  
  function stringReverse(inputString) {
    let result = "";
    for(let i = 0; i < inputString.length; i++){
      result += inputString.charAt(inputString.length - 1 - i)
    }
    console.log(result)
  }
  stringReverse("abcdefg");
  
  
  
  
  
  
  
  
  
  
  
  