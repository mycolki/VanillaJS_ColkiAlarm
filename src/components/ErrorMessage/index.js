import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import alarmClick from '../../sound/alarmClick.mp3';

import { BOX_SHADOW, MAIN_BLUE_COLOR, MESSAGE_BG_COLOR } from '../../constants/cssStyle';
import { ERROR_CLOSE, ERROR_ICON } from '../../constants/errorText';

function ErrorMessage({ error, closeModal }) {
  const [alarmClickSound] = useSound(alarmClick, { volume: 0.5 });
  const handleClick = ev => {
    ev.stopPropagation();
    alarmClickSound();
    closeModal();
  };

  return (
    <Wrapper>
      <span className="title">{ERROR_ICON}</span>
      <span className="message">{error?.USER_MSG}</span>
      <button
        className="check-button"
        type="button"
        onClick={handleClick}
      >
        {ERROR_CLOSE}
      </button>
    </Wrapper>
  );
}

export default React.memo(ErrorMessage);

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
  closeMessage: PropTypes.func,
};

ErrorMessage.defaultProps = {
  closeMessage: undefined,
};

const Wrapper = styled.figure`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 120px;
  padding: 10px;
  text-align: center;
  border-radius: 25px;
  background-color: ${MESSAGE_BG_COLOR};
  transform: translate(-50%, -50%);
  box-shadow: ${BOX_SHADOW};

  span {
    display: block;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
  }

  .message {
    font-size: 12px;
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
      background-color: ${MAIN_BLUE_COLOR};
      transform: scale(1.03);
    }
  }
`;
