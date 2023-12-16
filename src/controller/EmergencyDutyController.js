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
      console.log(this.#emergencyDutyService.getWeekdayNickname());
      return this.#inputWeekendNickname();
    });
  }

  async #inputWeekendNickname() {
    return reTry(async () => {
      const weekendNickname = await this.#inputView.readWeekendNickname();
      // 에러가 발생하면 weekday에서 다시 입력 받는다.
      
    });
  }
}

export default EmergencyDutyController;
