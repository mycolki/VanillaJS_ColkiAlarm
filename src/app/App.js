import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmsViewer from '../components/AlarmList';

import { removeAlarm } from '../features/alarmData/alarmDataSlice';
import { CLOCK_FORMAT } from '../constants/timeText';

export default function App() {
  const [clock, setClock] = useState(moment().format(CLOCK_FORMAT));

  useEffect(() => {
    const clockId = setInterval(() => {
      setClock(moment().format(CLOCK_FORMAT));
    }, 1000);

    return () => clearInterval(clockId);
  }, []);

  const dispatch = useDispatch();
  const cancelAlarm = id => dispatch(removeAlarm(id));

  return (
    <Container>
      <Header clock={clock} />
      <Section>
        <RegisterAlarm />
        <AlarmsViewer cancelAlarm={cancelAlarm} />
      </Section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: black;

  input {
    outline: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 600px;
  margin: auto;
`;
