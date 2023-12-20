const nicknames = Object.freeze({
  duplicated: '[ERROR] 닉네임이 중복 되었습니다. 다시 입력해 주세요.',
  length: '[ERROR] 닉네임이 5자를 넘었습니다. 다시 입력해 주세요.',
  count: '[ERROR] 사원의 수가 최소 5명, 최대 35명이 아닙니다. 다시 입력해 주세요.',
});

const schedule = Object.freeze({
  week: '[ERROR] 시작 요일이 "일, 월, 화, 수, 목, 금, 토"가 아닙니다. 다시 입력해 주세요.',
  month: '[ERROR] 입력하신 월이 1~12월이 아닙니다. 다시 입력해 주세요.',
});

const ERROR = Object.freeze({
  nicknames,
  schedule,
});

export default ERROR;
