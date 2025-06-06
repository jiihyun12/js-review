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

// 향상된 for문 사용
// 모든 유저의 이름
for(let i in users){ 
    // console.log(i)
    // console.log(user[i])
    console.log(users[i].name)
}; 


// 모든 유저의 포인트
let result = 0;
for(let i in users){
    result += users[i].point
}
console.log(result)



