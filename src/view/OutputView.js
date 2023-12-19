import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printEmergencyDutyString(emergencyDuty) {
    emergencyDuty.forEach(duty => Console.print(duty));
  },
};

export default OutputView;
