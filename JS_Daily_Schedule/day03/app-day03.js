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


// 가장 시간이 긴 스케줄 1개를 찾아서 콘솔에 출력

for (let i = 0; i < schedules.length; i++){
  const schedule = schedules[i]
  const start = schedule["start"]
  const date = start.split(" ")
  const hour = date[1]
  const minute = hour.split(":")
  const h = parseInt(minute[0])
  const m = parseInt(minute[1])
  const startTotal = h * 60 + m

  
  }




