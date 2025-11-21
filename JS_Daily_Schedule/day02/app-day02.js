const schedules = [
  {
    id: 1,
    group: "SC-01",
    start: "2025-11-20 09:00",
    end:   "2025-11-20 10:30",
  },
  {
    id: 2,
    group: "SC-02",
    start: "2025-11-20 08:00",
    end:   "2025-11-20 09:00",
  },
  {
    id: 3,
    group: "SC-03",
    start: "2025-11-20 10:00",
    end:   "2025-11-20 11:00",
  },
];


// 각 스케줄의 시간 차이(분 단위)를 계산해서 출력

for (let i = 0; i < schedules.length; i++){
  const schedule = schedules[i]
  const start = schedule["start"]
  const date = start.split(" ")
  const hour = date[1]
  const minute = hour.split(":")
  const h = parseInt(minute[0])
  const m = parseInt(minute[1])
  const startTotal = h * 60 + m

  const end = schedule["end"]
  const end_date = end.split(" ")
  const end_hour = end_date[1]
  const end_minute = end_hour.split(":")
  const end_h = parseInt(end_minute[0])
  const end_m = parseInt(end_minute[1])
  const endTotal = end_h * 60 + end_m

  result = endTotal - startTotal
  console.log(`${schedule["group"]}의 시간차 : ${result}`)
  }




