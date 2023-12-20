class DateHelper {
  static getStartingDayIndex(week, weekList) {
    return weekList.indexOf(week);
  }

  static getMonthAndDay(month, day, dayOfWeek, isHoliday) {
    return `${month}월 ${day}일 ${dayOfWeek}${isHoliday ? '(휴일)' : ''}`;
  }

  static isWeekendOrHoliday(weekOfIndex, month, day, holidays) {
    return weekOfIndex === 0 || weekOfIndex === 6 || this.isWeekdayHoliday(weekOfIndex, month, day, holidays);
  }

  static isWeekdayHoliday(weekOfIndex, month, day, holidays) {
    return weekOfIndex >= 1 && weekOfIndex <= 5 && holidays.some(holiday => holiday.month === month && holiday.day === day);
  }
}

export default DateHelper