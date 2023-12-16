import CONSTANTS from '../constants/constants.js';
import HOLIDAYS from '../constants/holidays.js';
import WEEK from '../constants/week.js';

class DutySchedule {
  #emergencySchedule;
  #weekdayNickname;
  #weekendNickname;
  #dutySchedule;

  constructor(emergencySchedule, weekdayNickname, weekendNickname) {
    this.#emergencySchedule = emergencySchedule;
    this.#weekdayNickname = weekdayNickname;
    this.#weekendNickname = weekendNickname;
    this.#dutySchedule = [];
  }

  dutySchedule() {
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
      this.#dutySchedule.push(
        `${month}월 ${i}일 ${currentDayOfWeek}${isHolidayToday ? '(휴일)' : ''} ${dutyPerson}`,
      );
      days += 1;
      lastDutyPerson = dutyPerson;
    }
    return this.#dutySchedule;
  }

  #isHoliday(month, day) {
    return HOLIDAYS.some(([hMonth, hDay]) => hMonth === month && hDay === day);
  }
}

export default DutySchedule;
