class WorkerAssigner {
  static assignWorker(nicknameArray, primaryIndex) {
    return nicknameArray[primaryIndex % nicknameArray.length];
  }

  static handleNextDay(worker, otherNicknames, otherIndex, nextDayIndex, swapIfSameWorker) {
    if (nextDayIndex) swapIfSameWorker(worker, otherNicknames, otherIndex);
  }

  static swapIfSameWorker(worker, nicknameArray, index) {
    if (worker === nicknameArray[index % nicknameArray.length]) {
      const currentIndex = index % nicknameArray.length;
      const nextIndex = (index + 1) % nicknameArray.length;
      const temp = nicknameArray[currentIndex];
      nicknameArray[currentIndex] = nicknameArray[nextIndex];
      nicknameArray[nextIndex] = temp;
    }
  }
}

export default WorkerAssigner;
