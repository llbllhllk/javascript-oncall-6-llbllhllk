import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printDutySchedule(dutySchedule) {
    dutySchedule.forEach(schedule => Console.print(schedule));
  },
};

export default OutputView;
