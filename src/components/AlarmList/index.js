import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Alarm from '../Alarm';

export default function AlarmsViewer({ cancelAlarm }) {
  const { alarmsById, allIds } = useSelector(state => state.alarmData);

  return (
    <Container>
      <ul>
        {allIds && allIds.map((id, index) => (
          <Alarm
            key={id}
            timeId={allIds[index]}
            alarm={alarmsById[allIds[index]]}
            cancelAlarm={cancelAlarm}
          />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  border-radius: 30px;
  border: 0.3px solid #FFFFFF70;
  background-color: #B1CFFF;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.1);

  ul {
    padding: 10px;
  }
`;
