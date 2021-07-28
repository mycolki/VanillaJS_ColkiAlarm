import React from 'react';
import styled from 'styled-components';

import useSound from 'use-sound';
import errorSound from '../../sound/error.mp3';
import { ERROR_CLOSE, ERROR_ICON } from '../../constants/errorText';

function ErrorMessage({ error, closeModal }) {
  const [errorClickSound] = useSound(errorSound, { volume: 0.5 });
  const handleClick = ev => {
    ev.stopPropagation();
    errorClickSound();
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
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);

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
    background-color: #c0392b;
    color: white;
    transition: all 100ms ease-out;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);

    &:hover {
      background-color: black;
      transform: scale(1.03);
    }
  }
`;
