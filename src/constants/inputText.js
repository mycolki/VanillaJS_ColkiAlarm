export const ALARM = {
  TITLE: { type: 'text', name:'title', text: '알람 이름을 입력해주세요' },
  DATE: { type: 'date', name: 'date', text: '날짜를 선택해주세요' },
  TIME: { type: 'time', name: 'time', text: '시간을 선택해주세요' },
  MESSAGE: { type: 'text', name: 'message', text: '알람 메시지를 입력해주세요' },
};

export const ALARM_MODE = {
  BASIC: { type: 'mode', name:'basic-mode', text: '기본' },
  VIBRATION: { type: 'mode', name: 'vibration-mode', text: '진동' },
  NIGHT: { type: 'mode', name: 'night-mode', text: '수면' },
};

export const ALARM_KIND = {
  BASIC: { type: 'kind', name: 'basic-alarm', text: '항상' },
  EMERGENCY: { type: 'kind', name: 'emergency-alarm', text: '긴급' },
};

export const RADIO_TITLE = {
  MODE: '알람 모드(Sound)',
  KIND: '알람 종류(긴급은 수면모드에도 울려요)',
};

export const BUTTON = {
  CREATE: 'Create Alarm!',
};
