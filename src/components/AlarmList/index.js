import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Alarm from '../Alarm';
import { sortIds } from '../../utils/viewAlarmData';

export default function AlarmsViewer() {
  const { alarmsById, allIds } = useSelector(state => state.alarmData);

  return (
    <Container>
      <ul>
        {allIds && sortIds(allIds).map((id, index) => (
          <Alarm
            key={id}
            timeId={[allIds[index]]}
            alarm={alarmsById[allIds[index]]}
          />
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightPink;

  ul {
    padding: 10px;
  }
`;
