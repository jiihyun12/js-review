// https://jsonplaceholder.typicode.com/users
// .toUpperCase() : 문자열을 대문자로
// .toLowerCase() : 문자열을 소문자로
// city를 가져와서 모두 대문자로 바꾸고 알파벳 중에 A의 개수를 카운트해서 콘솔에 출력하기

// city를 가져온다.
// 모두 대문자로 바꾼다.

// 알파벳을 자른다. split
// 근데 다 바꿔야하니까 모두 합치고? 자른다
// join하고 split?

// 잘린 알파벳중 A와 같은 것을 걸러낸다. filter
// 개수가 같아야하니까 filter의 길이를 걸러낸다?


// const cotch(console.error)


// 강사님 풀이
// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     return users
//   }
  
  // getUsers()
  //   .then((users) => users.map((user) => user.address.city))
  //   .then((users) => users.join("").toUpperCase())
  //   .then((str) => str.split("A").length - 1)
  //   .then(console.log)
  
  // getUsers()
  //   .then((users) => users.map((user) => user.address.city))
  //   .then((users) => users.join("").toUpperCase())
  //   .then((str) => {
  //     let count = 0;
  //     for(let i of str){
  //       i === "A" && count++
  //     }
  //     return count
  //   })
  //   .then(console.log)
  
//   getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((citys) => citys.filter((city) => city.includes('A') || city.includes('a') ))
//   .then((citys) => citys.join("").toUpperCase().split(""))
//   .then((chars) => chars.filter((char) => char === 'A').length)
//   .then(console.log)



// ==========================================================================================================
// https://jsonplaceholder.typicode.com/users
// fetch로 요청해서 유저들의 평균 lat값 구하기


// lat값을 불러온다.
// 유저가 몇 명인지도 알아야 한다.
// 다 더해서 유저의 인원만큼 나눈다.?
// 아니면 길이를 구한다.


// 평균을 구하려면 일단 다 더한다(연산)
// 그러려면 가져온 값을 숫자로 변환한다.
// 합계 reduce!
// 합계 / 유저.길이
// 아이디의 개수 10개


const getUsers = async () => {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas2 = await response2.json()
    return datas2
}
getUsers()
    .then((datas)=>datas.map((data)=>data.address.geo.lat))
    // .then((datas)=>Number(datas))
    // .then((datas)=>datas.map((data)=>parseInt(data)))
    .then((datas)=>datas.map((data)=>parseFloat(data)))
    // .then((nums)=> nums/nums.length)
    // .then((nums)=>nums.nums/sum.length)
    // .then((nums)=>nums/10)
    .then((numbers)=>{
       const sumNums =  numbers.reduce((sum, lats) => sum + lats)
    //    console.log(sumNums)
       return sumNums / numbers.length
    })
    .then((result)=>result.toFixed(2))
    .then(console.log)
    .catch(console.error)


// 강사님 풀이
// getUsers()
//   .then((users) => users.map((user) => user.address.geo.lat))
//   .then((lats) => lats.reduce((prev, cur) => parseFloat(prev) + Number(cur)) / lats.length )
//   .then((average) => average.toFixed(2))
//   .then(console.log)
