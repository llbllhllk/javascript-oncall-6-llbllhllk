class Nicknames {
  #formattedNicknames;

  constructor(nicknames) {
    this.#validate(this.#formatNicknames(nicknames));
    this.#formattedNicknames = this.#formatNicknames(nicknames);
  }

  getFormattedNicknames() {
    return this.#formattedNicknames;
  }

  #validate(nicknames) {
    if (nicknames.length !== new Set(nicknames).size)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    nicknames.forEach(nickname => {
      if (nickname.length > 5)
        throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    });
    if (nicknames.length < 5 || nicknames.length > 35)
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  }

  #formatNicknames(nicknames) {
    return nicknames
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default Nicknames;
