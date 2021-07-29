import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import firebaseApp from '../../firebase/firebase';
import moment from 'moment';

import useSound from 'use-sound';
import alarmClick from '../../sound/alarmClick.mp3';

import { removeAlarm, saveCurrentId, changeAlarmMode, inputValidationError } from '../../features/alarmData/alarmDataSlice';
import { ERROR } from '../../constants/errorText';
import { COLKI_ALARM } from '../../constants/database';
import { GLASS_WHITE_COLOR } from '../../constants/cssStyle';
import { TIME_FORMAT, ALARM_TIME } from '../../constants/timeText';
import { MODE_ICON, KIND_ICON, MUTE__ICON, REMOVE_ICON, ONLY_BASIC } from '../../constants/alarmItemText';

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

  const cancelClickedAlarm = async() => {
    dispatch(removeAlarm(id));
    alarmClickSound();

    try {
      const database = await firebaseApp.database().ref(COLKI_ALARM);
      await database.child(id).remove();
    } catch (err) {
      console.error(ERROR.REMOVE.CONSOLE_MSG, err.message);
      dispatch(inputValidationError(ERROR.REMOVE));
    }
  };

  return (
    <AlarmWrapper>
      <Time>
        <span className="date">{moment(date).format(ALARM_TIME)}</span>
        <span className="time">{time}</span>
        <span className="title">{title}</span>
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
            {MUTE__ICON}
          </Button>
        )}
        <Button
          type="button"
          alt="remove"
          onClick={cancelClickedAlarm}
        >
          {REMOVE_ICON}
        </Button>
      </Icons>
    </AlarmWrapper>
  );
}

Alarm.propTypes = {
  clock: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  alarm: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.string,
    time: PropTypes.string,
    mode: PropTypes.string,
    kind: PropTypes.string,
    message: PropTypes.string,
  }).isRequired
};

const AlarmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  font-size: 18px;
  line-height: 16px;
  border-bottom: 1px solid ${GLASS_WHITE_COLOR};
`;

const Time = styled.div`
  .date {
    margin-right: 10px;
    padding: 1px 5px 3px 5px;
    font-size: 12px;
    border-radius: 5px;
    background-color: #C1E8FB80;
    color: gray;
  }

  .time {
    margin-right: 10px;
    font-size: 13px;
  }

  .title {
    color: white;
    font-size: 14px;
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
