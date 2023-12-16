import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class WeekendNickname {
  #formattedWeekendNickname;

  constructor(weekendNickname) {
    this.#validate(this.#formatWeekendNickname(weekendNickname));
    this.#formattedWeekendNickname = this.#formatWeekendNickname(weekendNickname);
  }

  getFormattedWeekendNickname() {
    return this.#formattedWeekendNickname;
  }

  #validate(weekendNickname) {
    weekendNickname.forEach(nickname => {
      if (nickname.length > CONSTANTS.weekendNickname.minLength) throw new Error(ERROR.string);
    });
    if (
      weekendNickname.length < CONSTANTS.weekendNickname.minLength ||
      weekendNickname.length > CONSTANTS.weekendNickname.maxLength
    )
      throw new Error(ERROR.string);
    if (weekendNickname.length !== new Set(weekendNickname).size) throw new Error(ERROR.string);
  }

  #formatWeekendNickname(weekendNickname) {
    return weekendNickname
      .split(CONSTANTS.string.separtor)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default WeekendNickname;
