import React from 'react';
import styled from 'styled-components';
import { BsTrashFill, BsFillVolumeMuteFill } from 'react-icons/bs';

export default function Alarm() {
  return (
    <AlarmWrapper>
      <div>
        <span>7/28</span>
        <span>06:30</span>
        <span>과제제출</span>
      </div>
      <div>
        <button
          className="remove-button"
          type="button"
          alt="remove"
        >
          <BsTrashFill />
        </button>
        <button
          className="mute-button"
          type="button"
          alt="mute"
        >
          <BsFillVolumeMuteFill />
        </button>
      </div>
    </AlarmWrapper>
  );
}

const AlarmWrapper = styled.div`
  color: teal;
`;