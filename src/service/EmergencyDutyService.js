import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';

class EmergencyDutyService {
  #emergencySchedule;

  #weekdayNickname;

  constructor() {}

  setEmergencySchedule(emergencySchedule) {
    this.#emergencySchedule = new EmergencySchedule(
      emergencySchedule,
    ).getFormattedEmergencySchedule();
  }

  getEmergencySchedule() {
    return this.#emergencySchedule;
  }

  setWeekdayNickname(weekdayNickname) {
    this.#weekdayNickname = new WeekdayNickname(weekdayNickname).getFormattedWeekdayNickname();
  }

  getWeekdayNickname() {
    return this.#weekdayNickname;
  }
}

export default EmergencyDutyService;
