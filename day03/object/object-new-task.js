// 유저 프로토타입 생성하기
// 아이디, 비밀번호, 이름, 나이
// 1) hgd1234, "1234, "홍길동", 20
// 2) jbg1234, "장보고, "장보고", 30
// 3) lss1234, "dltnstls, "홍길동", 20


// User 프로토타입 정의
function User (id, password, name, age){
    this.id = id;
    this.password = password;
    this.name = name;
    this.age = age;
}

// 사용자 객체 초기화
const user1 = new User("hgd1234", "1234", "홍길동", 20);
const user2 = new User("jbg1234", "장보고", "장보고", 30);
const user3 = new User("lss1234", "dltnstls", "이순신", 20);

// 개별 출력
console.log(user1.name)
console.log(user2.name)
console.log(user3.name)

// 사용자 객체를 객체로 묶음
const users = {
    user1 : user1,
    user2 : user2,
    user3 : user3,
}

// 사용자 이름 출력 (for-in)
for(let i in users){
    console.log(users[i].name)
};











//=====================================================================================================

// 화살표 함수는 자신의 this를 가지지 않으므로 생성자 함수 내에서 사용할 수 없다.
// 생성자 함수는 호출 시 새로운 객체를 생성하며, 생성된 객체가 this로 바인딩된다. 
// 하지만 화살표 함수는 이를 지원하지 않는다.
// 일반 함수: 호출한 객체가 무엇인지에 따라 this가 동적으로 결정됨.
// 화살표 함수: 작성된 시점의 외부 스코프의 this를 고정하여 사용함.

// 일반 함수 (생성자 가능)
function User(name) {
    this.name = name;
}
const user10 = new User("홍길동"); // 정상 동작
console.log(user10.name); // "홍길동"

// 화살표 함수 (생성자 불가)
const UserArrow = (name) => {
    this.name = name;
};
const userArrow = new UserArrow("홍길동"); // Error: UserArrow is not a constructor
                                            // "UserArrow는 생성자가 아닙니다."



// const로 선언
// const는 변수의 재할당을 막아주는 역할을 한다. 
// 하지만, const로 선언된 객체의 속성이나 배열의 요소는 수정할 수 있다. 
// 객체와 배열이 참조 타입(reference type)으로 동작하기 때문.
// 참조 타입: 변수에 저장된 값이 실제 데이터가 아니라 데이터가 저장된 메모리 주소를 가리키는 방식.
// 따라서 const로 선언된 객체는 객체의 참조 주소는 변경할 수 없지만, 그 내부의 데이터는 수정할 수 있다.

const user11 = { name: "홍길동", age: 20 };

// 내부 속성 수정 가능
user11.name = "이순신";
console.log(user11.name); // "이순신"

// 참조 변경 불가
user11 = { name: "장보고", age: 30 }; // Error: Assignment to constant variable 
                                        // "상수 변수에 값을 할당하려고 했습니다."