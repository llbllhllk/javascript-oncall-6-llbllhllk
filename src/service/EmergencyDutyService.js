import EmergencySchedule from '../domain/EmergencySchedule.js';

class EmergencyDutyService {
  #emergencySchedule;

  constructor() {}

  setEmergencySchedule(emergencySchedule) {
    this.#emergencySchedule = new EmergencySchedule(
      emergencySchedule,
    ).getFormattedEmergencySchedule();
  }

  getEmergencySchedule() {
    return this.#emergencySchedule;
  }
}

export default EmergencyDutyService;
