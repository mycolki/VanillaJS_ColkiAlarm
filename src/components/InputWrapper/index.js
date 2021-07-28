import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BOX_SHADOW } from '../../constants/cssStyle';

export default function InputWrapper({ inputInfo: { type, name, text }, value, sendInputValue }) {
  return (
    <Wrapper>
      <span className="title">{text}</span>
      <input
        type={type}
        name={name}
        value={value}
        maxLength="15"
        onChange={sendInputValue}
      />
    </Wrapper>
  );
}

InputWrapper.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  sendInputValue: PropTypes.func.isRequired,
};

InputWrapper.defaultProps = {
  type: '',
  name: '',
  text: '',
};

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
    background: linear-gradient(#FFFFFF30, #FFFFFF90);
    box-shadow: ${BOX_SHADOW};
  }
`;
