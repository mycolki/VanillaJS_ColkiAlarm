import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import useSound from 'use-sound';
import click from '../../sound/click.mp3';

import InputWrapper from '../InputWrapper';
import RadioInputWrapper from '../RadioInputWrapper';

import { saveAlarm, setError } from '../../features/alarmData/alarmDataSlice';
import { BOX_SHADOW, BORDER, GLASS_WHITE_COLOR, MAIN_BLUE_COLOR } from '../../constants/cssStyle';
import { ERROR } from '../../constants/errorText';
import { ALARM, ALARM_MODE, ALARM_KIND, RADIO_TITLE, BUTTON } from '../../constants/inputText';

function RegisterAlarm() {
  const dispatch = useDispatch();
  const [ playClickSound ] = useSound(click, { volume: 0.5 });
  const [ inputValue, setInputValue ] = useState({
    title: "",
    date: "",
    time: "",
    mode: "",
    kind: "",
    message: "",
  });

  const handleChange = ev => {
    const { name, value } = ev.target;
    setInputValue({
      ...inputValue, [name]: value,
    });
  };

  const submitData = ev => {
    ev.preventDefault();
    playClickSound();

    try {
      dispatch(saveAlarm(inputValue));
    } catch (err) {
      if (err.message === ERROR.SAME_KEY.CONSOLE_MSG) {
        console.error(ERROR.SAME_KEY.NAME, err.message);
        dispatch(setError(ERROR.SAME_KEY));
      } else {
        console.error(ERROR.INPUT.NAME, err.message);
        dispatch(setError(ERROR.INPUT));
      }

      return;
    }

    setInputValue({
      title: "",
      date: "",
      time: "",
      mode: "",
      kind: "",
      message: "",
    });
  };

  return (
    <Container>
      <InputWrapper
        inputInfo={ALARM.TITLE}
        value={inputValue.title}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.DATE}
        value={inputValue.date}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.TIME}
        value={inputValue.time}
        sendInputValue={handleChange}
      />
      <RadioInputWrapper
        radioTitle={RADIO_TITLE.MODE}
        alarmStyle={ALARM_MODE}
        value={inputValue.mode}
        sendInputValue={handleChange}
      />
      <RadioInputWrapper
        radioTitle={RADIO_TITLE.KIND}
        alarmStyle={ALARM_KIND}
        value={inputValue.kind}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.MESSAGE}
        value={inputValue.message}
        sendInputValue={handleChange}
      />
      <Button
        className="create-button"
        type="submit"
        onClick={submitData}
      >
        {BUTTON.CREATE}
      </Button>
    </Container>
  );
}

export default React.memo(RegisterAlarm);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
  margin: 5px;
  text-align: center;
  border-radius: 30px;
  border: ${BORDER};
  background-color: ${GLASS_WHITE_COLOR};
  box-shadow: ${BOX_SHADOW};

  input {
    border: 0;
    padding: 12px;
    text-align: center;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${MAIN_BLUE_COLOR};
  color: white;
  box-shadow: ${BOX_SHADOW};

  &:hover {
    background-color: black;
    transform: scale(1.03);
  }
`;
