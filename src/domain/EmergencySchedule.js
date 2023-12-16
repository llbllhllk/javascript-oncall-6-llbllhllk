import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

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
    if (emergencySchedule[CONSTANTS.emergencySchedule.month] === CONSTANTS.string.zero)
      throw new Error(ERROR.string);
    if (
      !CONSTANTS.weeks.list.some(
        week => week === emergencySchedule[CONSTANTS.emergencySchedule.week],
      )
    )
      throw new Error(ERROR.string);
  }

  #formatEmergencySchedule(emergencySchedule) {
    return emergencySchedule
      .split(CONSTANTS.string.separtor)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default EmergencySchedule;
