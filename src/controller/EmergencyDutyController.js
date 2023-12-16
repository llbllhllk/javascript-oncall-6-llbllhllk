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
      this.#emergencyDutyService.setEmergencySchedule(emergencySchedule);
      console.log(this.#emergencyDutyService.getEmergencySchedule());
      // return this.#inputWeekdayEmergencyNickname();
    });
  }

  async #inputWeekdayEmergencyNickname() {
    return reTry(async () => {
      const weekdayEmergencyNickname = await this.#inputView.readWeekdayEmergencyNickname();

      return this.#inputWeekendEmergencyNickname();
    });
  }

  async #inputWeekendEmergencyNickname() {
    return reTry(async () => {
      const weekendEmergencyNickname = await this.#inputView.readWeekendEmergencyNickname();
    });
  }
}

export default EmergencyDutyController;
