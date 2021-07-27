import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmsViewer from '../components/AlarmList';
import ModalWrapper from '../components/ModalWrapper';
import Message from '../components/Message';

import { setClock, removeAlarm, initializeRingedId } from '../features/alarmData/alarmDataSlice';

export default function App() {
  const dispatch = useDispatch();
  const { clock } = useSelector(state => state.alarmData)
  const { isTimeToAlarm, id } = useSelector(state => state.alarmData);

  useEffect(() => {
    const clockId = setInterval(() => dispatch(setClock()), 1000);

    return () => clearInterval(clockId);
  }, [dispatch]);

  const closeMessage = () => {
    dispatch(initializeRingedId());
    dispatch(removeAlarm(id))
  };

  return (
    <Container>
      <Header clock={clock} />
      <Section>
        <RegisterAlarm />
        <AlarmsViewer clock={clock} />
      </Section>
      {isTimeToAlarm && (
        <ModalWrapper closeModal={closeMessage}>
          <Message
            id={id}
            closeMessage={closeMessage}
          />
        </ModalWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

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
