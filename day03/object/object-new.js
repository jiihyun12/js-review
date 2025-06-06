// 프로토타입(prototype)

function User(name) {
    this.name = name;
    this.hello = () => {
      return this.name
    };
  }
  
  // 프로토타입(prototype)
  const user1 = new User("홍길동");
  const user2 = new User("이순신");
  const user3 = new User("장보고");
  const user4 = { name: "김철수", hello : () => {} };
  const user5 = { name: "김영희", hello : () => {} };
  
  console.log(user1.hello());
  console.log(user2);
  console.log(user3.hello());
  console.log(user4);
  console.log(user5);