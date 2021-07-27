import React from 'react';
import styled from 'styled-components';

import RadioInput from '../RadioInput';

export default function RadioInputWrapper({ radioTitle, alarmStyle, value, sendInputValue }) {
  return (
    <Wrapper>
      <span className="title">{radioTitle}</span>
      <div>
        {Object.values(alarmStyle).map(item => (
          <RadioInput
            key={item.name}
            item={item}
            value={value}
            sendInputValue={sendInputValue}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;
  font-size: 14px;

  .title {
    font-size: 14px;
    font-weight: 600;
  }

  div {
    margin-bottom: 10px;
  }
`;
