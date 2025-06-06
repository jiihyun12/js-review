// promise(ES6)
const promise = new Promise((resolve, reject) => {
    let check = false;
    if(check){
      resolve("데이터 불러오기 성공!!") // 성공
    }else{
      reject("데이터 불러오기 실패!!") // 실패
    }
  })
  
  promise
    .then((result) => console.log(result)) // 성공
    .catch((error) => console.error(error)) // 실패