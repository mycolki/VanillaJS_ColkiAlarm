import React from 'react';
import styled from 'styled-components';

export default function InputWrapper({ inputInfo: { type, name, text }, value, sendInputValue }) {
  return (
    <Wrapper>
      <span className="title">{text}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={sendInputValue}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;

  .title {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
  }

  input {
    width: 200px;
  }
`;
