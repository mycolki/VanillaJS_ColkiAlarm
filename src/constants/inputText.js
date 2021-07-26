export const ALARM = {
  TITLE: { type: 'text', name:'title', text: '알람 이름을 입력해주세요'},
  DATE: { type: 'date', name: 'date', text: '날짜를 선택해주세요'},
  TIME: { type: 'time', name: 'time', text: '시간을 선택해주세요'},
  MESSAGE: { type: 'text', name: 'message', text: '알람 메시지를 입력해주세요'},
};

export const ALARM_MODE = {
  BASIC: { type: 'mode', name:'basic-mode', text: '일반 모드'},
  VIBRATION: { type: 'mode', name: 'vibration-mode', text: '진동 모드'},
  NIGHT: { type: 'mode', name: 'night-mode', text: '야간 모드'},
};

export const ALARM_KIND = {
  BASIC: { type: 'kind', name: 'basic-alarm', text: '일반 알람'},
  EMERGENCY: { type: 'kind', name: 'emergency-alarm', text: '긴급 알람'},
};

export const RADIO_TITLE = {
  MODE: '알람 모드를 선택하세요',
  KIND: '알람 종류를 선택하세요'
};

export const BUTTON = {
  CREATE: 'Create Alarm!',
};
