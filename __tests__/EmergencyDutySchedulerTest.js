import EmergencyDutyScheduler from '../src/domain/EmergencyDutyScheduler.js';

describe('EmergencyDutyScheduler 클래스 테스트', () => {
  describe('emergencyDuty메서드는 schedule, weekdayNicknames, weekendNicknames를 입력받아 emergencyDuty를 반환한다.', () => {
    const cases = [
      {
        schedule: ['5', '월'],
        weekdayNicknames: ['준팍', '도밥', '고니', '수아', '루루', '글로', '솔로스타', '우코', '슬링키', '참새', '도리'],
        weekendNicknames: ['수아', '루루', '글로', '솔로스타', '우코', '슬링키', '참새', '도리', '준팍', '도밥', '고니'],
        expected: [
          '5월 1일 월 준팍',
          '5월 2일 화 도밥',
          '5월 3일 수 고니',
          '5월 4일 목 수아',
          '5월 5일 금(휴일) 루루',
          '5월 6일 토 수아',
          '5월 7일 일 글로',
          '5월 8일 월 루루',
          '5월 9일 화 글로',
          '5월 10일 수 솔로스타',
          '5월 11일 목 우코',
          '5월 12일 금 슬링키',
          '5월 13일 토 솔로스타',
          '5월 14일 일 우코',
          '5월 15일 월 참새',
          '5월 16일 화 도리',
          '5월 17일 수 준팍',
          '5월 18일 목 도밥',
          '5월 19일 금 고니',
          '5월 20일 토 슬링키',
          '5월 21일 일 참새',
          '5월 22일 월 수아',
          '5월 23일 화 루루',
          '5월 24일 수 글로',
          '5월 25일 목 솔로스타',
          '5월 26일 금 우코',
          '5월 27일 토 도리',
          '5월 28일 일 준팍',
          '5월 29일 월 슬링키',
          '5월 30일 화 참새',
          '5월 31일 수 도리',
        ],
      },
    ];

    test.each(cases)(
      '월과 요일에 해당하는 $schedule, 평일 근무자 $weekdayNicknames, 휴일 근무자 $weekendNicknames이 주어지는 경우, emergencyDuty메서드는()는 비상 근무표인 $expected를 반환한다.',
      ({ schedule, weekdayNicknames, weekendNicknames, expected }) => {
        // when
        const emergencyDuty = new EmergencyDutyScheduler(schedule, weekdayNicknames, weekendNicknames).emergencyDuty();

        // then
        expect(emergencyDuty).toEqual(expected);
      },
    );
  });
});
