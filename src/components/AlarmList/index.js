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
  background-color: white;

  ul {
    padding: 10px;
  }
`;
