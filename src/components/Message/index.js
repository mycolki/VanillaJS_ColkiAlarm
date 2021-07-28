import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import alarmClick from '../../sound/alarmClick.mp3';

import { ALARM_MSG, EMERGENCY, CLOSE_ALARM } from '../../constants/messageTest';
import { ALARM_MODE, ALARM_KIND } from '../../constants/inputText';

function Message({ id, closeMessage }) {
  const {
    title,
    time,
    kind,
    message
  } = useSelector(state => state.alarmData.alarmsById[id]);
  const { mode } = useSelector(state => state.alarmData.alarmsById[id]);

  const handleClick = ev => {
    ev.stopPropagation();
    closeMessage();
  };

  const [alarmClickSound] = useSound(alarmClick, { volume: 0.5 });
  const handleButtonClick = () => {
    alarmClickSound();
    closeMessage();
  };

  const alarmSound = (kind === ALARM_KIND.EMERGENCY.name)
    ? EMERGENCY + ALARM_MSG[ALARM_MODE.BASIC.name]
    : ALARM_MSG[mode];

  return (
    <Wrapper onClick={handleClick}>
      <span className="title">{time} {title}</span>
      <span className="message">{message}</span>
      <span className="alarm">{alarmSound}</span>
      <button
        className="check-button"
        type="button"
        onClick={handleButtonClick}
      >
        {CLOSE_ALARM}
      </button>
    </Wrapper>
  );
}

export default React.memo(Message);

Message.propTypes = {
  id: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

const Wrapper = styled.figure`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 160px;
  padding: 10px;
  text-align: center;
  border-radius: 25px;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);

  span {
    display: block;
  }

  .title {
    font-weight: 600;
    margin: 5px 0 20px 0;
  }

  .message {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .alarm {
    margin-bottom: 15px;
    font-size: 11px;
    color: tomato;
  }

  .check-button {
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    transition: all 100ms ease-out;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);

    &:hover {
      background-color: #c0392b;
      transform: scale(1.03);
    }
  }
`;
