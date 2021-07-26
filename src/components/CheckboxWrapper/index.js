import React from 'react';
import styled from 'styled-components';

import CheckboxInput from '../CheckboxInput';

export default function CheckboxWrapper({ checkboxType, alarmStyle}) {
  return (
    <Wrapper>
      <span>{checkboxType}</span>
      <div>
        {Object.values(alarmStyle).map(item => (
          <CheckboxInput
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;

  div {
    margin-bottom: 10px;
  }
`;
