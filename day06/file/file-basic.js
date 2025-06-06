const file = require('fs')

const user = new Object();
user.name = "함지현"
user.age = 20
user.id = "jhj1234"
user.password = "1234"

const userJSON = JSON.stringify(user)

file.writeFileSync
file.writeFile('./user.json', userJSON, "utf-8", (error) => {
  if(error){
    console.error(error)
  }else{
    console.log("출력 성공!")
  }
})

file.readFile('./user.json', 'utf-8', (error, content) => {
  let user = JSON.parse(content) 
  return user
})

// 동기
// const user = JSON.parse(file.readFileSync('./user.json', 'utf-8'))
// console.log(user)


