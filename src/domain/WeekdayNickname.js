import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class WeekdayNickname {
  #formattedWeekdayNickname;

  constructor(weekdayNickname) {
    this.#validate(this.#formatWeekdayNickname(weekdayNickname));
    this.#formattedWeekdayNickname = this.#formatWeekdayNickname(weekdayNickname);
  }

  getFormattedWeekdayNickname() {
    return this.#formattedWeekdayNickname;
  }

  #validate(weekdayNickname) {
    weekdayNickname.forEach(nickname => {
      if (nickname.length > CONSTANTS.weedayNickname.minLength) throw new Error(ERROR.string);
    });
    if (
      weekdayNickname.length < CONSTANTS.weedayNickname.minLength ||
      weekdayNickname.length > CONSTANTS.weedayNickname.maxLength
    )
      throw new Error(ERROR.string);
    if (weekdayNickname.length !== new Set(weekdayNickname).size) throw new Error(ERROR.string);
  }

  #formatWeekdayNickname(weekdayNickname) {
    return weekdayNickname
      .split(CONSTANTS.string.separtor)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default WeekdayNickname;
