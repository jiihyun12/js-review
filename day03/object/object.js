// 객체의 선언
// const user = new Object();
// user = {};

// const obj = {
//     name : "홍길동",
//     age : 10,
//     height : 180
// }

// 주소값에 접근하기 위한 연산자

// 마침표 표기법
// console.group(obj.name); 
// console.log(obj.age);

// 대괄호 표기법
// 순서가 있거나, 규칙성이 있을 때
// ex)
// name1 : "홍길동",
// name2 : "이순신"

// console.log(obj["name"]) // name의 키값 호출



const user = {
    name : "김세환",
    age : 20,
    address : "경기도",
    introduce : () => {
        console.log("안녕하세요")
    }
}

console.log(typeof(user))

console.log(user.address)
console.log(user["age"])
user.introduce()



const products = {
    product1 : "지우개",
    product2 : "키보드",
    product3 : "마우스",
    product4 : "연필",
    product5 : "노트북",
}

// 일반 for문
for(let i = 0; i < 5; i++){
    console.log(products["product" + (i + 1)])
}

// 빠른 for문, 향상된 for문
// for ~ in문
for(let i in products){
    console.log(products[i]) // 규칙성이 있을 때 사용(대괄호 접근법)
}


// 배열
for(let i of products){
    console.log(i)
}



// 객체의 특징
// 1) 값이 있으면 수정된다.
console.log(products.product1)
products.product1 = "핸드폰";
console.log(products.product1)

// 2) 값이 없으면 추가된다.
products.product6 = "도화지";
console.log(products.product6)

// 3) 데이터를 전송할 대 사용하는 자료구조(JSON)과 비슷한 자료구조이다.
// JSON.stringify()


// 특정 속성 삭제
const obj = {
    name: "홍길동",
    age: 25,
    job: "개발자"
};

delete obj.job;

console.log(obj);
// 결과: { name: "홍길동", age: 25 }

// 주의
// delete는 프로토타입 속성을 삭제하지 못한다.

// function User(name) {
//     this.name = name;
// }
// User.prototype.age = 25;

// const user = new User("홍길동");

// console.log(user.age); // 25
// delete user.age;       // 프로토타입 속성 삭제 불가
// console.log(user.age); // 여전히 25

//delete는 객체의 자체 속성(Own Property)에 대해서만 작동하고
// 상속된 속성은 삭제되지 않는다.
