import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class Schedule {
  #formattedSchedule;

  constructor(schedule) {
    this.#validate(this.#formatSchedule(schedule));
    this.#formattedSchedule = this.#formatSchedule(schedule);
  }

  getFormattedSchedule() {
    return this.#formattedSchedule;
  }

  #validate(schedule) {
    if (schedule[CONSTANTS.schedule.month] < CONSTANTS.month.january || schedule[CONSTANTS.schedule.month] > CONSTANTS.month.december) throw new Error(ERROR.schedule.week);
    if (!CONSTANTS.week.list.includes(schedule[CONSTANTS.schedule.week])) throw new Error(ERROR.schedule.month);
  }

  #formatSchedule(schedule) {
    return schedule
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default Schedule;
