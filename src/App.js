import EmergencyDutyController from './controller/EmergencyDutyController.js';
import EmergencyDutyService from './service/EmergencyDutyService.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #emergencyDutyController;

  constructor() {
    const emergencyDutyService = new EmergencyDutyService();
    this.#emergencyDutyController = new EmergencyDutyController(emergencyDutyService, InputView, OutputView);
  }

  async run() {
    return this.#emergencyDutyController.start();
  }
}

export default App;
