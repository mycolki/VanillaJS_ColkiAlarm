import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import useSound from 'use-sound';
import alarmClick from '../../sound/alarmClick.mp3';

import { removeAlarm, saveCurrentId, changeAlarmMode } from '../../features/alarmData/alarmDataSlice';
import { TIME_FORMAT, ALARM_TIME } from '../../constants/timeText';
import { MODE_ICON, KIND_ICON, ONLY_BASIC } from '../../constants/alarmItemText';

export default function Alarm({ clock, id, alarm }) {
  const { title, date, time, mode, kind } = alarm;
  const { isTimeToAlarm } = useSelector(state => state.alarmData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTimeToAlarm) return;

    const now = moment().format(TIME_FORMAT);
    if (moment(now).isSame(id)) dispatch(saveCurrentId(id));
  }, [id, isTimeToAlarm, dispatch, clock]);

  const [alarmClickSound] = useSound(alarmClick, { volume: 0.5 });
  const muteAlarmSound = () => {
    dispatch(changeAlarmMode(id));
    alarmClickSound();
  };

  const cancelClickedAlarm = () => {
    dispatch(removeAlarm(id));
    alarmClickSound();
  };

  return (
    <AlarmWrapper>
      <Time>
        <span className="date">{moment(date).format(ALARM_TIME)}</span>
        <span className="time">{time}</span>
        <span>{title}</span>
      </Time>

      <Icons>
        <span alt="mode">{MODE_ICON[mode]}</span>
        <span alt="kind">{KIND_ICON[kind]}</span>
        {(mode === ONLY_BASIC) && (
          <Button
            type="button"
            alt="mute"
            onClick={muteAlarmSound}
          >
            🔕
          </Button>
        )}
        <Button
          type="button"
          alt="remove"
          onClick={cancelClickedAlarm}
        >
          ✖️
        </Button>
      </Icons>
    </AlarmWrapper>
  );
}

const AlarmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 18px;
  line-height: 16px;
`;

const Time = styled.div`
  .date {
    margin-right: 5px;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 5px;
    background-color: lightGrey;
    color: white;
  }

  .time {
    margin-right: 5px;
    font-size: 17px;
  }
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  font-size: 17px;
  line-height: 17px;
  background-color: transparent;
`;

const Icons = styled.div`
  span {
    padding: 0 5px;
    line-height: 5px;
  }
`;
