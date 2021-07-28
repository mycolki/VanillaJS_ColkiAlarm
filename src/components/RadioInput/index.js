import React, { useRef } from 'react';
import styled from 'styled-components';
import { ALARM_MODE, ALARM_KIND } from '../../constants/inputText';

export default function RadioInput({ item: { type, name, text }, sendInputValue }) {
  const inputRef = useRef();

  if (name === ALARM_MODE.BASIC.name || name === ALARM_KIND.BASIC.name) {
    inputRef.current && inputRef.current.setAttribute('checked', true);
  }

  return (
    <Wrapper>
      <input
        ref={inputRef}
        type="radio"
        id={name}
        name={type}
        value={name}
        onChange={sendInputValue}
      />
      <label htmlFor={name}>
        {text}
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  padding: 15px;
`;
