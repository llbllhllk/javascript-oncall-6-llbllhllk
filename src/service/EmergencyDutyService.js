import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';
import WeekendNickname from '../domain/WeekendNickname.js';
import DutySchedule from '../domain/DutySchedule.js';

class EmergencyDutyService {
  #emergencySchedule;

  #weekdayNickname;

  #weekendNickname;

  setEmergencySchedule(emergencySchedule) {
    this.#emergencySchedule = new EmergencySchedule(
      emergencySchedule,
    ).getFormattedEmergencySchedule();
  }

  setWeekdayNickname(weekdayNickname) {
    this.#weekdayNickname = new WeekdayNickname(weekdayNickname).getFormattedWeekdayNickname();
  }

  setWeekendNickname(weekendNickname) {
    this.#weekendNickname = new WeekendNickname(weekendNickname).getFormattedWeekendNickname();
  }

  dutySchedule() {
    return new DutySchedule(
      this.#emergencySchedule,
      this.#weekdayNickname,
      this.#weekendNickname,
    ).dutySchedule();
  }
}

export default EmergencyDutyService;
