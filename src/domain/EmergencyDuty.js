import CONSTANTS from '../constants/constants.js';

class EmergencyDuty {
  #schedule;

  #weekdayNicknames;

  #weekendNicknames;

  constructor(schedule, weekdayNicknames, weekendNicknames) {
    this.#schedule = schedule;
    this.#weekdayNicknames = weekdayNicknames;
    this.#weekendNicknames = weekendNicknames;
  }

  emergencyDuty() {
    const month = Number(this.#schedule[0]);
    const week = this.#schedule[1];
    const startingDayIndex = CONSTANTS.week.list.indexOf(week);
    const dayOfMonth = CONSTANTS.day[month];

    let weekdayIndex = 0;
    let weekendIndex = 0;

    return Array.from({ length: dayOfMonth }, (_, i) => {
      const weekOfIndex = (i + startingDayIndex) % 7;
      const dayOfWeek = CONSTANTS.week.list[weekOfIndex];
      const shouldWeekendAndHoliday = this.#shouldWeekendAndHoliday(weekOfIndex, month, i + 1);
      const shouldWeekdayHoliday = this.#shouldWeekdayHoliday(weekOfIndex, month, i + 1);
      const monthAndDay = this.#monthAndDay(month, i + 1, dayOfWeek, shouldWeekdayHoliday);
      let worker = '';

      // 현재 주말 => 다음날 평일
      if (shouldWeekendAndHoliday) {
        worker = this.#weekendNicknames[weekendIndex % this.#weekendNicknames.length];
        const nextDayIndex = (i + 1 + startingDayIndex) % 7;
        if (
          this.#shouldWeekday(weekOfIndex, month, nextDayIndex) &&
          worker === this.#weekdayNicknames[weekdayIndex % this.#weekdayNicknames.length]
        ) {
          const temp = this.#weekdayNicknames[weekdayIndex % this.#weekdayNicknames.length];
          this.#weekdayNicknames[weekdayIndex % this.#weekdayNicknames.length] =
            this.#weekdayNicknames[(weekdayIndex + 1) % this.#weekdayNicknames.length];
          this.#weekdayNicknames[(weekdayIndex + 1) % this.#weekdayNicknames.length] = temp;
        }
        weekendIndex += 1;
      } else {
        // 현재 평일 => 다음날 휴일
        worker = this.#weekdayNicknames[weekdayIndex % this.#weekdayNicknames.length];
        const nextDayIndex = (i + 1 + startingDayIndex) % 7;
        if (
          this.#shouldWeekendAndHoliday(weekOfIndex, month, nextDayIndex) &&
          worker === this.#weekendNicknames[weekendIndex % this.#weekendNicknames.length]
        ) {
          const temp = this.#weekendNicknames[weekendIndex % this.#weekendNicknames.length];
          this.#weekendNicknames[weekendIndex % this.#weekendNicknames.length] =
            this.#weekendNicknames[(weekendIndex + 1) % this.#weekendNicknames.length];
          this.#weekendNicknames[(weekendIndex + 1) % this.#weekendNicknames.length] = temp;
        }
        weekdayIndex += 1;
      }
      return `${monthAndDay} ${worker}`;
    });
  }

  #monthAndDay(month, day, dayOfWeek, shouldWeekdayHoliday) {
    return `${month}월 ${day}일 ${dayOfWeek}${shouldWeekdayHoliday ? '(휴일)' : ''}`;
  }

  #shouldWeekendAndHoliday(weekOfIndex, month, day) {
    return (
      weekOfIndex === 0 || weekOfIndex === 6 || this.#shouldWeekdayHoliday(weekOfIndex, month, day)
    );
  }

  #shouldWeekdayHoliday(weekOfIndex, month, day) {
    return (
      (weekOfIndex >= 1 || weekOfIndex <= 5) &&
      CONSTANTS.holidays.some(holiday => holiday.month === month && holiday.day === day)
    );
  }

  #shouldWeekday(weekOfIndex) {
    return weekOfIndex >= 1 || weekOfIndex <= 5;
  }
}

export default EmergencyDuty;
