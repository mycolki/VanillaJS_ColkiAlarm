import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { CLOSE_ALARM } from '../../constants/messageTest';

export default function Message({ id, closeMessage }) {
  const {
    title,
    time,
    mode,
    kind,
    message
  } = useSelector(state => state.alarmData.alarmsById[id]);

  const handleClick = ev => {
    ev.stopPropagation();
    closeMessage();
  }

  return (
    <Modal onClick={handleClick}>
      <span className="title">{time} {title}</span>
      <span className="message">{message}</span>
      <button
        className="check-button"
        type="button"
        onClick={closeMessage}
      >
        {CLOSE_ALARM}
      </button>
    </Modal>
  );
}

const Modal = styled.figure`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 110px;
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
    margin: 5px 0 10px 0;
  }

  .message {
    font-size: 14px;
    margin-bottom: 15px;
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
