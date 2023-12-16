import EmergencyDutyController from './controller/EmergencyDutyController.js';
import EmergencyDutyService from './service/EmergencyDutyService.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #EmergencyDutyController;

  constructor() {
    const emergencyDutyService = new EmergencyDutyService();
    this.#EmergencyDutyController = new EmergencyDutyController(
      emergencyDutyService,
      InputView,
      OutputView,
    );
  }

  async run() {
    return this.#EmergencyDutyController.start();
  }
}

export default App;
