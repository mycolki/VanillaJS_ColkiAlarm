import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmsViewer from '../components/AlarmList';
import ModalWrapper from '../components/ModalWrapper';
import Message from '../components/Message';

import { removeAlarm } from '../features/alarmData/alarmDataSlice';
import { CLOCK_FORMAT } from '../constants/timeText';
import { saveId, removeId } from '../features/modal/modalSlice';

export default function App() {
  const [clock, setClock] = useState(moment().format(CLOCK_FORMAT));

  useEffect(() => {
    const clockId = setInterval(() => setClock(moment().format(CLOCK_FORMAT)), 1000);

    return () => clearInterval(clockId);
  }, []);

  const { alarmsById } = useSelector(state => state.alarmData);
  const { canShow, id } = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const cancelAlarm = id => dispatch(removeAlarm(id));
  const showPopup = id => dispatch(saveId(id));
  const hidePopup = () => dispatch(removeId());

  return (
    <Container>
      <Header clock={clock} />
      <Section>
        <RegisterAlarm />
        <AlarmsViewer
          cancelAlarm={cancelAlarm}
          showPopup={showPopup}
        />
      </Section>
      {canShow && (
        <ModalWrapper hidePopup={hidePopup}>
          <Message
            hidePopup={hidePopup}
            alarmTitle={alarmsById[id].title}
            time={alarmsById[id].time}
            message={alarmsById[id].message}
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
