import CONSTANTS from '../constants/constants.js';
import WorkerAssigner from './WorkerAssigner.js';
import DateHelper from './DateHelper.js';

class EmergencyDutyScheduler {
  #schedule;

  #weekdayNicknames;

  #weekendNicknames;

  #weekdayIndex;

  #weekendIndex;

  constructor(schedule, weekdayNicknames, weekendNicknames) {
    this.#schedule = schedule;
    this.#weekdayNicknames = weekdayNicknames;
    this.#weekendNicknames = weekendNicknames;
    this.#weekdayIndex = 0;
    this.#weekendIndex = 0;
  }

  emergencyDuty() {
    const month = Number(this.#schedule[0]);
    const week = this.#schedule[1];
    const startingDayIndex = DateHelper.getStartingDayIndex(week, CONSTANTS.week.list);
    const dayOfMonth = CONSTANTS.day[month];
    return this.#generateDutySchedule(month, startingDayIndex, dayOfMonth);
  }

  #generateDutySchedule(month, startingDayIndex, dayOfMonth) {
    return Array.from({ length: dayOfMonth }, (_, i) => {
      const weekOfIndex = (i + startingDayIndex) % 7;
      const monthAndDay = DateHelper.getMonthAndDay(month, i + 1, CONSTANTS.week.list[weekOfIndex], DateHelper.isWeekdayHoliday(weekOfIndex, month, i + 1, CONSTANTS.holidays));
      const worker = this.#assignWorkerAndHandleNextDay(weekOfIndex, i, month, startingDayIndex);
      return `${monthAndDay} ${worker}`;
    });
  }

  #assignWorkerAndHandleNextDay(weekOfIndex, i, month, startingDayIndex) {
    let worker = '';
    if (DateHelper.isWeekendOrHoliday(weekOfIndex, month, i + 1, CONSTANTS.holidays)) {
      worker = WorkerAssigner.assignWorker(this.#weekendNicknames, this.#weekendIndex, this.#weekdayIndex);
      WorkerAssigner.handleNextDay(worker, this.#weekdayNicknames, this.#weekdayIndex, (i + 1 + startingDayIndex) % 7, WorkerAssigner.swapIfSameWorker);
      this.#weekendIndex += 1;
      return worker;
    }
    worker = WorkerAssigner.assignWorker(this.#weekdayNicknames, this.#weekdayIndex, this.#weekendIndex);
    WorkerAssigner.handleNextDay(worker, this.#weekendNicknames, this.#weekendIndex, (i + 1 + startingDayIndex) % 7, WorkerAssigner.swapIfSameWorker);
    this.#weekdayIndex += 1;
    return worker;
  }
}

export default EmergencyDutyScheduler;
