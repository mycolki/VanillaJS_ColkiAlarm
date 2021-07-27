import React from 'react';
import styled from 'styled-components';

export default function Message({ hidePopup, time, alarmTitle, message }) {
  const handleClick = ev => {
    ev.stopPropagation();
    hidePopup();
  }

  return (
    <Modal onClick={handleClick}>
      <span className="title">{time} {alarmTitle}</span>
      <span className="message">{message}</span>
      <button className="check-button" type="button" onClick={hidePopup}>알람 끄기</button>
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
  transform: translate(-50%, -50%);
  background-color: white;
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
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);
    transition: all 100ms ease-out;

    &:hover {
      background-color: #c0392b;
      transform: scale(1.03);
    }
  }
`;
