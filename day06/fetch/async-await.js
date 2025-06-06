// async await (ES8)

// const getTodos = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos",{})
//     const todos = await response.json()
//     console.log(todos)
//     return todos;
// }
// getTodos()
// .then(console.log)


// https://jsonplaceholder.typicode.com/users
// async await 문법으로 fetch를 사용하여 user의 zipcode만 콘솔에 출력하기

const getZipcode = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas = await response.json()
    return datas;
}
getZipcode()
    .then((datas)=>datas.map((data)=>data.address))
    .then((address)=>address.forEach((addresses)=>{
        console.log(addresses.zipcode)
    }))
    // .then((address)=>address.map((addresses)=>addresses.zipcode))
    // .then((console.log))
    .catch(console.error)


// 강사님 풀이
// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     const zipcodes = await users.map((user) => user.address.zipcode)
//     console.log(zipcodes)
//     return zipcodes
//   }
  
//   getUsers()
  
//   const getUsers2 = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     return users
//   }
  
//   getUsers2()
//     .then((users) => users.map((user) => user.address.zipcode))
//     .then((zipcodes) => zipcodes.forEach((zipcode) => console.log(zipcode)))