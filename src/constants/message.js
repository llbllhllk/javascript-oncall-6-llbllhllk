const read = Object.freeze({
  schedule: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  weekdayNicknames: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  weekendNicknames: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

const print = Object.freeze({
  holiday: '(휴일)',
});

const MESSAGE = Object.freeze({ read, print });

export default MESSAGE;
