import CONSTANTS from '../constants/constants.js';
import MESSAGE from '../constants/message.js';

class DateHelper {
  static getStartingDayIndex(week, weekList) {
    return weekList.indexOf(week);
  }

  static getMonthAndDay(month, day, dayOfWeek, isHoliday) {
    return `${month}월 ${day}일 ${dayOfWeek}${isHoliday ? MESSAGE.print.holiday : ''}`;
  }

  static isWeekendOrHoliday(weekOfIndex, month, day, holidays) {
    return weekOfIndex === CONSTANTS.week.sunday || weekOfIndex === CONSTANTS.week.saturday || this.isWeekdayHoliday(weekOfIndex, month, day, holidays);
  }

  static isWeekdayHoliday(weekOfIndex, month, day, holidays) {
    return weekOfIndex >= CONSTANTS.week.monday && weekOfIndex <= CONSTANTS.week.friday && holidays.some(holiday => holiday.month === month && holiday.day === day);
  }
}

export default DateHelper;
