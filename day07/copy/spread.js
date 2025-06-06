const animals = {
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
  }
  
  // animals.cat = "치즈"
  // animals.camel = "낙둥이"
  
  // const animals2 = {...animals, cat : "흑둥이", rabbit : "토둥이"}
  // console.log(animals2)
  
  // 배열
  const arr1 = [10, 20, 30]
  const arr2 = [40, 50, 60]
  const arr3 = [70, 80, 90]
  const arr4 = [...arr1, ...arr2, ...arr3]
  const arr5 = arr1.concat(arr2, arr3)
  
  // ES6 .falt(), .faltMap()
  // console.log(arr5)
  const arr6 = [arr1, arr2, arr3]
  const arr7 = arr6.flat();
  const max = Math.max(...arr7)
  const min = Math.min(...arr7)
  // console.log(arr6)
  console.log(max)
  console.log(min)
  
  const arr8 = [10, [10, [10, [10]]]].flat(4)
  console.log(arr8)
  
  const arr9 = ["홍길동", "이순신", "장보고"]
  const arr10 = arr9.map((s) => s.split(""))
  const arr11 = arr9.flatMap((s) => s.split(""))
  console.log(arr10)
  console.log(arr11)