import EmergencyDuty from '../domain/EmergencyDuty.js';
import Nicknames from '../domain/Nicknames.js';
import Schedule from '../domain/Schedule.js';

class EmergencyDutyService {
  #schedule;

  #weekdayNicknames;

  #weekendNicknames;

  constructor() {}

  setSchedule(schedule) {
    this.#schedule = new Schedule(schedule).getFormattedSchedule();
  }

  setWeekdayNicknames(nicknames) {
    this.#weekdayNicknames = new Nicknames(nicknames).getFormattedNicknames();
  }

  setWeekendNicknames(nicknames) {
    this.#weekendNicknames = new Nicknames(nicknames).getFormattedNicknames();
  }

  emergencyDuty() {
    return new EmergencyDuty(this.#schedule, this.#weekdayNicknames, this.#weekendNicknames).emergencyDuty();
  }
}

export default EmergencyDutyService;
