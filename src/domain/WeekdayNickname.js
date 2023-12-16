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
      if (nickname.length > 5)
        throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    });
    if (weekdayNickname.length < 5 || weekdayNickname.length > 35)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    if (weekdayNickname.length !== new Set(weekdayNickname).size)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  }

  #formatWeekdayNickname(weekdayNickname) {
    return weekdayNickname
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default WeekdayNickname;
