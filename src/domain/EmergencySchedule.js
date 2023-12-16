import CONSTANTS from '../constants/constants.js';

class EmergencySchedule {
  #formattedEmergencySchedule;

  constructor(emergencySchedule) {
    this.#validate(this.#formatEmergencySchedule(emergencySchedule));
    this.#formattedEmergencySchedule = this.#formatEmergencySchedule(emergencySchedule);
  }

  getFormattedEmergencySchedule() {
    return this.#formattedEmergencySchedule;
  }

  #validate(emergencySchedule) {
    if (emergencySchedule[0] === '0')
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
    if (!CONSTANTS.weeks.list.some(week => week === emergencySchedule[1]))
      throw new Error('[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  }

  #formatEmergencySchedule(emergencySchedule) {
    return emergencySchedule
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default EmergencySchedule;
