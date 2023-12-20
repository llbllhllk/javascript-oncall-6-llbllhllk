import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readSchedule() {
    return await Console.readLineAsync(MESSAGE.read.schedule);
  },

  async readWeekdayNicknames() {
    return await Console.readLineAsync(MESSAGE.read.weekdayNickname);
  },

  async readWeekendNicknames() {
    return await Console.readLineAsync(MESSAGE.read.weekendNicknames);
  },
};

export default InputView;
