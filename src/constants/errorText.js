export const ERROR = {
  SAME_KEY: {
    NAME: 'SAME KEY ADDED',
    USER_MSG: '같은 시간에 중복으로 알람을 등록할 수 없습니다. 이전 알람을 삭제하고 추가해주세요',
    CONSOLE_MSG: 'An alarm with the same key has already been added',
  },
  INPUT: {
    NAME: 'NOT FILLED INPUT',
    USER_MSG: '빈칸을 모두 입력하고 확인 버튼을 눌러주세요',
    CONSOLE_MSG: 'All the blanks must be filled',
  },
  FETCH: {
    NAME: 'NOT FETCH',
    USER_MSG: '아직 알람 리스트를 불러오지 못했습니다. 잠시만 기다려주세요',
    CONSOLE_MSG: 'The list is not being loaded.',
  },
  REMOVE: {
    NAME: 'NOT REMOVE',
    USER_MSG: '알람 삭제 기능이 지연되고 있습니다',
    CONSOLE_MSG: 'Alarm deletion is being delayed.',
  },
};

export const ERROR_CLOSE = '확인';
export const ERROR_ICON = '⚠️';
