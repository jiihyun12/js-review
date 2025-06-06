const users = {
    user1 : {
        name : "홍길동",
        age : 30,
        point : 3000
    },
    user2 : {
        name : "이순신",
        age : 20,
        point : 10000
    },
    user3 : {
        name : "장보고",
        age : 65,
        point : 9500
    },
}

// 객체 -> JSON
const jsonUsers = JSON.stringify(users);
// JSON -> 객체
console.log(JSON.parse(jsonUsers));
