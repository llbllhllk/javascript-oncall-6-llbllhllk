### 미션 해결 전략

#### 1. 본인이 이해하고 구현한 내용에 기반해 '다른 근무자와 순서를 바꿔야 하는 경우'를 자신만의 예시를 들어 설명하세요. (필수)
주어진 근무자 리스트에서 휴일 근무자와 이전 평일 근무자가 같은 경우에는 다음 근무자와 다다음 근무자와 서로 교체하는 로직을 예시로 설명하겠습니다.

예를 들어, 평일 근무자 리스트가 아래와 같다고 가정해보겠습니다:

평일 근무자: A, B, C, D, E, F, G

휴일 근무자: X, Y, Z

이 때, 일정 날짜에 대해 근무자를 배정하는데 휴일 근무자와 이전 평일 근무자가 같으면, 예를 들어 C가 일요일에 근무하고 다음 월요일에 또 C가 근무해야 할 상황이라고 가정합니다.

현재 근무 배정:

일요일: C (휴일 근무)
월요일: C (휴일 이후 다시 C가 근무해야 할 상황)
이때, 휴일 근무자 C와 평일 근무자 C가 같으면 다음 근무자 B와 다다음 근무자 D와 서로 교체하여 근무자를 변경합니다.

변경된 근무 배정:

일요일: C (휴일 근무)
월요일: B (평일 근무)
이렇게 하면 이전 평일 근무자와 휴일 근무자가 같을 때, 다음 근무자와 다다음 근무자가 서로 교체되어 효율적인 근무 배정이 이루어집니다.

#### 2. 요구사항에서 제시한 앞의 날짜부터 순서를 변경하는 방법 외에 다른 방법이 있다면 어떤 방식이 있는지, 이 방법은 기존에 제시된 방식과 비교해 어떤 차이가 있는지 설명하세요. (선택)
