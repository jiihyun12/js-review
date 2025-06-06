// 객체, 배열
const arr1 = [10, 20, 30, 40]
const [one, two, three, four] = arr1;

console.log(one)
console.log(two)
console.log(three)
console.log(four)

// 객체
const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

const { cat, ...notCat } = animals
console.log(notCat)
console.log(cat)


// https://jsonplaceholder.typicode.com/users
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return users
}

getUsers()
  .then((users) => users.map(({name}) => {
    console.log(name)
  }))