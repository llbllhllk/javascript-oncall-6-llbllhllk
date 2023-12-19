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
      return this.#inputWeekdayNicknames();
    });
  }

  async #inputWeekdayNicknames() {
    const weekdayNicknames = await this.#inputView.readWeekdayNicknames();
    console.log(weekdayNicknames);
  }
}

export default EmergencyDutyController;
