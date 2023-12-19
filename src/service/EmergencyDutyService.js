import CONSTANTS from '../constants/constants.js';
import Nicknames from '../domain/Nicknames.js';
import Schedule from '../domain/Schedule.js';

class EmergencyDutyService {
  #schedule;

  #weekdayNicknames;

  #weekendNicknames;

  constructor() {}

  setSchedule(schedule) {
    this.#schedule = new Schedule(schedule).getFormattedSchedule();
  }

  setWeekdayNicknames(nicknames) {
    this.#weekdayNicknames = new Nicknames(nicknames).getFormattedNicknames();
  }

  setWeekendNicknames(nicknames) {
    this.#weekendNicknames = new Nicknames(nicknames).getFormattedNicknames();
  }

  emergencyDuty() {
    const duty = [];
    const length = this.#weekdayNicknames.length;
    const monthAndDays = this.#monthAndDays();
    monthAndDays.forEach(monthAndDay => console.log(monthAndDay));
  }

  #monthAndDays() {
    const month = Number(this.#schedule[0]);
    const week = this.#schedule[1];
    const startingDayIndex = CONSTANTS.week.list.indexOf(week);
    return Array.from({ length: CONSTANTS.day[month] }, (_, i) => {
      const weekOfIndex = (i + startingDayIndex) % 7;
      const dayOfWeek = CONSTANTS.week.list[weekOfIndex];
      const shouldWeekdayHoliday = this.#shouldWeekdayHoliday(weekOfIndex, month, i + 1);
      return `${month}월 ${i + 1}일 ${dayOfWeek}${shouldWeekdayHoliday ? '(휴일)' : ''}`;
    });
  }

  #shouldWeekdayHoliday(weekOfIndex, month, day) {
    return (
      (weekOfIndex >= 1 || weekOfIndex <= 5) &&
      CONSTANTS.holidays.some(holiday => holiday.month === month && holiday.day === day)
    );
  }
}

export default EmergencyDutyService;
