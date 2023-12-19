import CONSTANTS from '../constants/constants.js';

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
    if (schedule[0] < 1 || schedule[0] > 12)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    if (!CONSTANTS.week.list.includes(schedule[1]))
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  }

  #formatSchedule(schedule) {
    return schedule
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default Schedule;
