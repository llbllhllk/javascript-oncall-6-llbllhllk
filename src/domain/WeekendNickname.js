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
      if (nickname.length > 5)
        throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    });
    if (weekendNickname.length < 5 || weekendNickname.length > 35)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    if (weekendNickname.length !== new Set(weekendNickname).size)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  }

  #formatWeekendNickname(weekendNickname) {
    return weekendNickname
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default WeekendNickname;
