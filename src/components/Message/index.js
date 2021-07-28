import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import alarmClick from '../../sound/alarmClick.mp3';

import { BOX_SHADOW, MESSAGE_BG_COLOR, MAIN_BLUE_COLOR } from '../../constants/cssStyle';
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
  background-color: ${MESSAGE_BG_COLOR};
  transform: translate(-50%, -50%);
  box-shadow: ${BOX_SHADOW};

  span {
    display: block;
  }

  .title {
    margin: 5px 0 20px 0;
    font-weight: 600;
    color: white;
  }

  .message {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .alarm {
    margin-bottom: 15px;
    font-size: 11px;
    color: #4A81D9;
  }

  .check-button {
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${MAIN_BLUE_COLOR};
    color: white;
    transition: all 100ms ease-out;
    box-shadow: ${BOX_SHADOW};

    &:hover {
      background-color: black;
      transform: scale(1.03);
    }
  }
`;
