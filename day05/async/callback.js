// 콜백지옥

const DB = [];

// 회원가입 
// DB 저장하고
// email 전송
// 성공 메세지

// const register = (user) => {
//   return saveDB(user, (user) => {
//     return sendEmail(user, (user) => {
//       return getResult(user)
//     })
//   })
// }

// const saveDB = (user, callback) => {
//   DB.push(user)
//   console.log(`save ${user.name} to DB`)
//   return callback(user)
// }

// const sendEmail = (user, callback) => {
//   console.log(`${user.email}에 전송완료!`)
//   return callback(user)
// }

// const getResult = (user) => {
//   return `success register user ${user.name}`
// }

// const user = {
//   name : '김세환',
//   email : "codefuling@gmail.com"
// }


const saveDB = (user, callback) => {
  const beforeLength = DB.length;
  const afterLength = DB.push(user)
  return new Promise((resolve, reject) => {
    if(beforeLength < afterLength){
      resolve(user)
    }else{
      reject(new Error(`save DB`))
    }
  })
}

const sendEmail = (user) => {
  console.log(`${user.email}에 전송완료!`)
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}

const getResult = (user) => {
  return new Promise((resolve) => {
    resolve(`success register user ${user.name}`)
  }) 
}

const register = (user) => {
  const result = saveDB(user).then(sendEmail).then(getResult)
  result.then(console.log)
}

const user = {
  name : '김세환',
  email : "codefuling@gmail.com"
}

register(user)



