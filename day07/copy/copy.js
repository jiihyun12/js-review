const animals = {
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
  }
  
  // const animals2 = animals
  // console.log(animals2.cat)
  // console.log(animals.cat)
  
  // 깊은 복사
  // 1) Object.assign({}, 복사할 객체) 메서드를 사용한다.
  // const animals2 = Object.assign({}, animals)
  // animals2.cat = "날렵이"
  // animals.cat = "야옹이"
  
  // console.log(animals)
  // console.log(animals2)
  
  // 2) spread 문법 (ES6)
  // 객체와 배열
  // const animals3 = {...animals}
  // animals.dog = "흰둥이"
  // animals3.dog = "어제의 나"
  
  // console.log(animals)
  // console.log(animals3)
  
  const user = {
    name : "홍길동",
    age : 20,
    hobby : {
      main : "자기",
      sub : "먹기"
    }
  }
  
  const user2 = Object.assign({}, user)
  user.hobby.main = "코딩"
  user2.hobby.main = "스포츠"
  console.log(user)
  console.log(user2)
  
  // lodash 모듈
  // fast-copy 모듈
  // 재귀함수