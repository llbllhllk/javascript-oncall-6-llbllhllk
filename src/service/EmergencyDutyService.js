import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';
import WeekendNickname from '../domain/WeekendNickname.js';

class EmergencyDutyService {
  #emergencySchedule;

  #weekdayNickname;

  #weekendNickname;

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

  setWeekendNickname(weekendNickname) {
    this.#weekendNickname = new WeekendNickname(weekendNickname).getFormattedWeekendNickname();
  }

  getWeekendNickname() {
    return this.#weekendNickname;
  }
}

export default EmergencyDutyService;
