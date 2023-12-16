import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import HOLIDAYS from '../constants/holidays.js';
import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';
import WeekendNickname from '../domain/WeekendNickname.js';
import WEEK from '../constants/week.js';

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
    const month = this.#emergencySchedule[0];
    const week = this.#emergencySchedule[1];
    const day = CONSTANTS.day[month];
    const daysOfWeek = WEEK.list;
    const startingDayIndex = daysOfWeek.indexOf(week);
    let days = 0;

    let weekdayIndex = 0;
    let weekendIndex = 0;

    let lastDutyPerson = '';

    for (let i = 1; i <= day; i++) {
      const currentDayOfWeek = daysOfWeek[(i - 1 + startingDayIndex) % 7];
      const isHolidayToday = this.#isHoliday(Number(month), i);
      let dutyPerson;

      if (isHolidayToday || currentDayOfWeek === '토' || currentDayOfWeek === '일') {
        if (this.#weekdayNickname[weekdayIndex] === this.#weekendNickname[weekendIndex]) {
          const temp = this.#weekendNickname[weekendIndex];
          this.#weekendNickname[weekendIndex] = this.#weekdayNickname[weekdayIndex];
          this.#weekdayNickname[weekdayIndex] = temp;
        }
        dutyPerson = this.#weekendNickname[weekendIndex];
        weekendIndex = (weekendIndex + 1) % this.#weekendNickname.length;
      } else {
        // 추가된 로직: 비상 근무자의 연속 근무를 방지하기 위해 앞의 날짜부터 순서를 변경
        while (
          this.#weekdayNickname[weekdayIndex] === lastDutyPerson ||
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
      lastDutyPerson = dutyPerson;
    }
  }

  #isHoliday(month, day) {
    return HOLIDAYS.some(([hMonth, hDay]) => hMonth === month && hDay === day);
  }
}

export default EmergencyDutyService;
