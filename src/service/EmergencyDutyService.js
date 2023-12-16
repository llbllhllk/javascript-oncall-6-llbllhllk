import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import HOLIDAYS from '../constants/holidays.js';
import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';
import WeekendNickname from '../domain/WeekendNickname.js';

class EmergencyDutyService {
  #emergencySchedule;

  #weekdayNickname;

  #weekendNickname;

  constructor() {}

  setEmergencySchedule(emergencySchedule) {
    this.#emergencySchedule = new EmergencySchedule(
      emergencySchedule,
    ).getFormattedEmergencySchedule();
  }

  getEmergencySchedule() {
    return this.#emergencySchedule;
  }

  setWeekdayNickname(weekdayNickname) {
    this.#weekdayNickname = new WeekdayNickname(weekdayNickname).getFormattedWeekdayNickname();
  }

  getWeekdayNickname() {
    return this.#weekdayNickname;
  }

  setWeekendNickname(weekendNickname) {
    this.#weekendNickname = new WeekendNickname(weekendNickname).getFormattedWeekendNickname();
  }

  getWeekendNickname() {
    return this.#weekendNickname;
  }

  result() {
    const month = this.#emergencySchedule[0]; // 5
    const week = this.#emergencySchedule[1]; // '월'
    const day = CONSTANTS.day[this.#emergencySchedule[0]]; // 31
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const startingDayIndex = daysOfWeek.indexOf(week);
    let days = 0;

    let weekdayIndex = 0;
    let weekendIndex = 0;

    for (let i = 1; i <= day; i++) {
      const currentDayOfWeek = daysOfWeek[(i - 1 + startingDayIndex) % 7];
      const isHolidayToday = this.#isHoliday(Number(month), i);
      let dutyPerson;

      if (isHolidayToday || currentDayOfWeek === '토' || currentDayOfWeek === '일') {
        if (this.#weekdayNickname[weekdayIndex] === this.#weekendNickname[weekendIndex]) {
          const temp = this.#weekendNickname[weekendIndex];
          this.#weekendNickname[weekendIndex] = this.#weekdayNickname[weekdayIndex + 1];
          this.#weekdayNickname[weekdayIndex] = temp;
        }
        dutyPerson = this.#weekendNickname[weekendIndex];
        weekendIndex = (weekendIndex + 1) % this.#weekendNickname.length;
      } else {
        if (
          this.#weekdayNickname[weekdayIndex] ===
          this.#weekdayNickname[(weekdayIndex + 1) % this.#weekdayNickname.length]
        ) {
          const temp = this.#weekdayNickname[weekdayIndex];
          this.#weekdayNickname[weekdayIndex] =
            this.#weekdayNickname[(weekdayIndex + 1) % this.#weekdayNickname.length];
          this.#weekdayNickname[(weekdayIndex + 1) % this.#weekdayNickname.length] = temp;
        }
        dutyPerson = this.#weekdayNickname[weekdayIndex];
        weekdayIndex = (weekdayIndex + 1) % this.#weekdayNickname.length;
      }

      Console.print(
        `${month}월 ${i}일 ${currentDayOfWeek}${isHolidayToday ? '(휴일)' : ''} ${dutyPerson}`,
      );
      days += 1;
    }
  }

  #isHoliday(month, day) {
    return HOLIDAYS.some(([hMonth, hDay]) => hMonth === month && hDay === day);
  }
}

export default EmergencyDutyService;

// 평일 근무자 순서대로 출력하다가 휴일 혹은 주말이면 휴일 근무자로 탐색한다. 근데 휴일 근무자가 이전 평일 근무자와 같으면 다음 근무자와 현재 휴일 근무자를 서로 바꾸고 출력한다. 이후 평일이 돌아오면 다시 평일 근무자의 배열을 탐색한다.
