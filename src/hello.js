function swap(arr, index1, index2) {
  // 배열의 두 요소를 교환하는 함수
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function generateWorkSchedule(weekdays, holidays) {
  const schedule = [];

  // 주중과 휴일 근무자 리스트 초기화
  const weekdayWorkers = [
    '준팍',
    '도밥',
    '고니',
    '수아',
    '루루',
    '글로',
    '솔로스타',
    '우코',
    '슬링키',
    '참새',
    '도리',
  ];
  const holidayWorkers = [
    '수아',
    '루루',
    '글로',
    '솔로스타',
    '우코',
    '슬링키',
    '참새',
    '도리',
    '준팍',
    '도밥',
    '고니',
  ];

  // 초기 근무 상태 설정
  schedule.push(weekdayWorkers[0]); // 월요일

  for (let i = 1; i < weekdays.length; i++) {
    const currentDay = weekdays[i];
    const previousDayWorker = schedule[i - 1];

    // 법정공휴일이면서 비상 근무자가 다음 평일에 근무하는 경우 순서를 변경
    if (holidays.includes(currentDay) && holidayWorkers.indexOf(previousDayWorker) !== -1) {
      const nextWeekdayWorkerIndex =
        (weekdayWorkers.indexOf(previousDayWorker) + 1) % weekdayWorkers.length;
      swap(weekdayWorkers, weekdayWorkers.indexOf(previousDayWorker), nextWeekdayWorkerIndex);
    }

    // 현재 요일에 대한 근무자 배정
    const currentWorkerIndex =
      (weekdayWorkers.indexOf(schedule[i - 1]) + 1) % weekdayWorkers.length;
    schedule.push(weekdayWorkers[currentWorkerIndex]);
  }

  return schedule;
}

// 예시: 월요일부터 일요일까지의 근무 예시 생성
const weekdays = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
const holidays = ['수요일']; // 법정공휴일 설정

const workSchedule = generateWorkSchedule(weekdays, holidays);
console.log('근무 예시:', workSchedule.join(', '));
