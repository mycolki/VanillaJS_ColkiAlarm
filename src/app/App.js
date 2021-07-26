import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmsViewer from '../components/AlarmList';

export default function App() {
  return (
    <Container>
      <Header />
      <Section>
        <RegisterAlarm />
        <AlarmsViewer />
      </Section>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightGray;
`;

const Section = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 600px;
  margin: auto;
  background-color: teal;
`;
