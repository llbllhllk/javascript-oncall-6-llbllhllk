import { Console } from '@woowacourse/mission-utils';

const reTry = async (callback, onError) => {
  while (true) {
    try {
      return await callback();
    } catch ({ message }) {
      Console.print(message);
      if (onError) return await onError();
    }
  }
};

export default reTry;
