import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import firebaseApp from '../firebase/firebase';

import useSound from 'use-sound';
import click from '../sound/click.mp3';

import Header from '../components/Header';
import RegisterAlarm from '../components/RegisterAlarm';
import AlarmList from '../components/AlarmList';
import ModalWrapper from '../components/ModalWrapper';
import Message from '../components/Message';
import ErrorMessage from '../components/ErrorMessage';

import { COLKI_ALARM } from '../constants/database';
import { ERROR } from '../constants/errorText';
import { toggleModal } from '../features/activateModal/activateModalSlice';
import { getDataByFirebase, setClock, removeAlarm, initializeRingedId, inputValidationError } from '../features/alarmData/alarmDataSlice';

export default function App() {
  const dispatch = useDispatch();
  const { clock } = useSelector(state => state.alarmData)
  const { isTimeToAlarm, id } = useSelector(state => state.alarmData);
  const { hasError, error } = useSelector(state => state.alarmData);
  const { shouldOpenModal } = useSelector(state => state.activateModal);

  useEffect(() => {
    const fetchData = async() => {
      const database = await firebaseApp.database().ref(COLKI_ALARM);

      database.on('value', async(snapshot) => {
        try {
          const data = snapshot.val();

          if (!data) return;

          await dispatch(getDataByFirebase(data));
        } catch (error) {
          console.error(ERROR.FETCH.CONSOLE_MSG, error.message);
          dispatch(inputValidationError(ERROR.FETCH));
        }
      });
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (!hasError) return;

    const readyToOpenModal = () => dispatch(toggleModal());
    readyToOpenModal();

    return () => dispatch(inputValidationError());
  }, [dispatch, hasError]);

  useEffect(() => {
    const clockId = setInterval(() => dispatch(setClock()), 1000);
    return () => clearInterval(clockId);
  }, [dispatch]);

  const closeMessage = async() => {
    dispatch(initializeRingedId());
    dispatch(removeAlarm(id));
    dispatch(inputValidationError());
    dispatch(toggleModal());

    try {
      const database = await firebaseApp.database().ref(COLKI_ALARM);
      await database.child(id).remove();
    } catch (err) {
      console.error(ERROR.FETCH.NAME, err.message);
      dispatch(inputValidationError(ERROR.FETCH));
    }
  };

  const [playClickSound] = useSound(click, { volume: 0.5 });
  const closeErrorMessage = () => {
    dispatch(toggleModal());
    playClickSound();
  };

  return (
    <Container>
      <Header clock={clock} />
      <Section>
        <RegisterAlarm />
        <AlarmList clock={clock} />
      </Section>

      {isTimeToAlarm && (
        <ModalWrapper closeModal={closeMessage}>
          <Message
            id={id}
            closeMessage={closeMessage}
          />
        </ModalWrapper>
      )}

      {shouldOpenModal && (
        <ModalWrapper closeModal={closeErrorMessage}>
          <ErrorMessage
            error={error}
            closeModal={closeErrorMessage}
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
  background-image: linear-gradient(120deg, #a1c4fd 50%, #c2e9fb 20%);

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
