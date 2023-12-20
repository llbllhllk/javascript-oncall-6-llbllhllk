import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

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
    if (nicknames.length !== new Set(nicknames).size) throw new Error(ERROR.nicknames.duplicated);
    nicknames.forEach(nickname => {
      if (nickname.length > CONSTANTS.nicknames.maxLength) throw new Error(ERROR.nicknames.length);
    });
    if (nicknames.length < CONSTANTS.nicknames.minCount || nicknames.length > CONSTANTS.nicknames.maxCount) throw new Error(ERROR.nicknames.count);
  }

  #formatNicknames(nicknames) {
    return nicknames
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default Nicknames;
