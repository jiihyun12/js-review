
// try ~ catch는 비동기 코드의 오류를 잡을 수 없다.
// 비동기 코드는 비동기 함수 내에서 잡아야한다.


// setTimeout(() => {
//   try {
//     asdklasjdklasjdklasjdkjasd
//   } catch (error) {
    
//   }
// }, 5000)

try {
    const a = 10 / 0;
    a++
    console.log(a)
  
  } catch (error) {
  
    console.error("Servicer Name Error")
    console.error(error)
    // instanceof 타입
    // if(error instanceof ReferenceError){
    //   console.error("a값을 접근할 수 없습니다😅")
    // }else if(error instanceof TypeError){
    //   console.error("0으로 나눌 수 없습니다.")
    // }else if(error instanceof SyntaxError){
    //   console.error("문법이 틀렸습니다! 🤔")
    // }
    // console.log(error.name)
    // console.log(error.message)
    // console.log(error.stack)
  }finally{
    console.log("무조건 실행!")
  }
  
  

