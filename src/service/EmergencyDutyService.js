import Schedule from '../domain/Schedule.js';

class EmergencyDutyService {
  #schedule;

  constructor() {}

  setSchedule(schedule) {
    this.#schedule = new Schedule(schedule).getFormattedSchedule();
  }
}

export default EmergencyDutyService;
