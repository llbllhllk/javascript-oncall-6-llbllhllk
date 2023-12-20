import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readSchedule() {
    const schedule = await Console.readLineAsync(MESSAGE.read.schedule);
    return schedule;
  },

  async readWeekdayNicknames() {
    const weekdayNicknames = await Console.readLineAsync(MESSAGE.read.weekdayNicknames);
    return weekdayNicknames;
  },

  async readWeekendNicknames() {
    const weekendNicknames = await Console.readLineAsync(MESSAGE.read.weekendNicknames);
    return weekendNicknames;
  },
};

export default InputView;
