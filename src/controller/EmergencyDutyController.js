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
    return this.#inputSchedule();
  }

  async #inputSchedule() {
    return reTry(async () => {
      const schedule = await this.#inputView.readSchedule();
    });
  }
}

export default EmergencyDutyController;
