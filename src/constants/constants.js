const day = Object.freeze({
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
});

const weeks = Object.freeze({
  list: ['일', '월', '화', '수', '목', '금', '토'],
});

const emergencySchedule = Object.freeze({
  month: 0,
  week: 1,
});

const weedayNickname = Object.freeze({
  minLength: 5,
  maxLength: 35,
});

const weekendNickname = Object.freeze({
  minLength: 5,
  maxLength: 35,
});

const string = Object.freeze({
  separtor: ',',
  zero: '0',
});

const CONSTANTS = Object.freeze({
  weedayNickname,
  weekendNickname,
  emergencySchedule,
  weeks,
  day,
  string,
});

export default CONSTANTS;
