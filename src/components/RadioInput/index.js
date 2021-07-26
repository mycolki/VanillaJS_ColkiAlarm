import React from 'react';
import styled from 'styled-components';

export default function RadioInput({ item: { type, name, text }, sendInputValue }) {
  return (
    <Wrapper>
      <input
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
  margin-right: 5px;
`;
