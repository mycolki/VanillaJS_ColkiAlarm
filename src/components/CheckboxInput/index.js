import React from 'react';
import styled from 'styled-components';

export default function CheckboxInput({ item: { name, text } }) {
  return (
    <Wrapper>
      <input
        type="checkbox"
        id={name}
        name={name}
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
