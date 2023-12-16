import { Console } from '@woowacourse/mission-utils';
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

      return this.#inputWeekdayNickname();
    });
  }

  async #inputWeekdayNickname() {
    return reTry(async () => {
      const weekdayNickname = await this.#inputView.readWeekdayNickname();
      this.#emergencyDutyService.setWeekdayNickname(weekdayNickname);
      return this.#inputWeekendNickname();
    });
  }

  async #inputWeekendNickname() {
    while (true) {
      try {
        const weekendNickname = await this.#inputView.readWeekendNickname();
        this.#emergencyDutyService.setWeekendNickname(weekendNickname);
        return this.#printResult();
      } catch ({ message }) {
        Console.print(message);
        return this.#inputWeekdayNickname();
      }
    }
  }

  #printResult() {
    const dutySchedule = this.#emergencyDutyService.dutySchedule();
    console.log(dutySchedule);
    this.#outputView.printDutySchedule(dutySchedule);
  }
}

export default EmergencyDutyController;
