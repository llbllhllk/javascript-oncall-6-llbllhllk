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
    return this.#generateEmergencyDutyArray(dayOfMonth, startingDayIndex, month, weekdayIndex, weekendIndex);
  }

  #generateEmergencyDutyArray(dayOfMonth, startingDayIndex, month, weekdayIndex, weekendIndex) {
    return Array.from({ length: dayOfMonth }, (_, i) => {
      const weekOfIndex = (i + startingDayIndex) % 7;
      const monthAndDay = this.#monthAndDay(month, i + 1, CONSTANTS.week.list[weekOfIndex], this.#shouldWeekdayHoliday(weekOfIndex, month, i + 1));
      let worker = '';
      if (this.#shouldWeekendAndHoliday(weekOfIndex, month, i + 1)) {
        worker = this.#weekendNicknames[weekendIndex % this.#weekendNicknames.length];
        this.#handleNextDay(worker, this.#weekdayNicknames, weekdayIndex, i, startingDayIndex, weekOfIndex, month);
        weekendIndex += 1;
      }
      if (!this.#shouldWeekendAndHoliday(weekOfIndex, month, i + 1)) {
        worker = this.#weekdayNicknames[weekdayIndex % this.#weekdayNicknames.length];
        this.#handleNextDay(worker, this.#weekendNicknames, weekendIndex, i, startingDayIndex, weekOfIndex, month);
        weekdayIndex += 1;
      }
      return `${monthAndDay} ${worker}`;
    });
  }

  #handleNextDay(worker, otherNicknames, otherIndex, i, startingDayIndex, weekOfIndex, month) {
    const nextDayIndex = (i + 1 + startingDayIndex) % 7;
    if (this.#shouldWeekday(weekOfIndex, month, nextDayIndex)) this.#swapIfSameWorker(worker, otherNicknames, otherIndex);
  }

  #monthAndDay(month, day, dayOfWeek, shouldWeekdayHoliday) {
    return `${month}월 ${day}일 ${dayOfWeek}${shouldWeekdayHoliday ? '(휴일)' : ''}`;
  }

  #shouldWeekendAndHoliday(weekOfIndex, month, day) {
    return weekOfIndex === 0 || weekOfIndex === 6 || this.#shouldWeekdayHoliday(weekOfIndex, month, day);
  }

  #shouldWeekdayHoliday(weekOfIndex, month, day) {
    return (weekOfIndex >= 1 || weekOfIndex <= 5) && CONSTANTS.holidays.some(holiday => holiday.month === month && holiday.day === day);
  }

  #shouldWeekday(weekOfIndex) {
    return weekOfIndex >= 1 || weekOfIndex <= 5;
  }

  #swapIfSameWorker(worker, nicknameArray, index) {
    if (worker === nicknameArray[index % nicknameArray.length]) {
      const temp = nicknameArray[index % nicknameArray.length];
      nicknameArray[index % nicknameArray.length] = nicknameArray[(index + 1) % nicknameArray.length];
      nicknameArray[(index + 1) % nicknameArray.length] = temp;
    }
  }
}

export default EmergencyDuty;
