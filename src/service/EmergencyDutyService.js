import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import HOLIDAYS from '../constants/holidays.js';
import EmergencySchedule from '../domain/EmergencySchedule.js';
import WeekdayNickname from '../domain/WeekdayNickname.js';
import WeekendNickname from '../domain/WeekendNickname.js';
import WEEK from '../constants/week.js';

import DutySchedule from '../domain/DutySchedule.js';

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

  dutySchedule() {
    return new DutySchedule(
      this.#emergencySchedule,
      this.#weekdayNickname,
      this.#weekendNickname,
    ).dutySchedule();
  }
}

export default EmergencyDutyService;
