
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



for (let i = 0; i < schedules.length; i++){
  const schedule = schedules[i]
  if (schedule["group"] === "SC-02"){
    continue
  }
  console.log(schedule)
}
