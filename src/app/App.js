import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmsViewer from '../components/AlarmList';

import { TIME_FORMAT } from '../constants/timeText';

export default function App() {
  const [clock, setClock] = useState(moment().format(TIME_FORMAT));

  useEffect(() => {
    const clockId = setInterval(() => {
      setClock(moment().format(TIME_FORMAT));
    }, 1000);

    return () => clearInterval(clockId);
  }, []);

  return (
    <Container>
      <Header clock={clock} />
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
