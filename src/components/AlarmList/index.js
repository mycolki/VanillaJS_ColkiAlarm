import React from 'react';
import styled from 'styled-components';
import Alarm from '../Alarm';

export default function AlarmsViewer() {
  return (
    <Container>
      <ul><Alarm /></ul>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightPink;
`;
