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
      this.#emergencyDutyService.setSchedule(schedule);
      return this.#inputWeekdayNicknames();
    });
  }

  async #inputWeekdayNicknames() {
    return reTry(async () => {
      const weekdayNicknames = await this.#inputView.readWeekdayNicknames();
      this.#emergencyDutyService.setWeekdayNicknames(weekdayNicknames);
      return this.#inputWeekendNicknames();
    });
  }

  async #inputWeekendNicknames() {
    return reTry(async () => {
      const weekendNicknames = await this.#inputView.readWeekendNicknames();
      this.#emergencyDutyService.setWeekendNicknames(weekendNicknames);
      return this.#printResult();
    }, () => this.#inputWeekdayNicknames());
  }

  #printResult() {
    console.log('Hello World!');
  }
}

export default EmergencyDutyController;
