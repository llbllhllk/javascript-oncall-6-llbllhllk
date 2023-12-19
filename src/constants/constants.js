const week = Object.freeze({
  list: ['일', '월', '화', '수', '목', '금', '토'],
});

const holidays = [
  { month: 1, day: 1 },
  { month: 3, day: 1 },
  { month: 5, day: 5 },
  { month: 6, day: 6 },
  { month: 8, day: 15 },
  { month: 10, day: 3 },
  { month: 10, day: 9 },
  { month: 12, day: 25 },
];

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

const CONSTANTS = Object.freeze({
  week,
  holidays,
  day,
});

export default CONSTANTS;
