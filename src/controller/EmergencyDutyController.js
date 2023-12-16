import reTry from '../utils/reTry.js';

class EmergencyDutyController {
  #emergencyDutyService;

  #inputView;

  #outputView;

  constructor(emergencyDutyService, inputView, outputView) {
    this.#emergencyDutyService = emergencyDutyService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputEmergencySchedule();
  }

  async #inputEmergencySchedule() {
    return reTry(async () => {
      const emergencySchedule = await this.#inputView.readEmergencySchedule();
      console.log(emergencySchedule);
    });
  }
}

export default EmergencyDutyController;
