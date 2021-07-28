import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

RadioInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  sendInputValue: PropTypes.func.isRequired,
};

const Wrapper = styled.span`
  padding: 15px;
`;
