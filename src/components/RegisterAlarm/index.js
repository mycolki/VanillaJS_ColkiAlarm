import React, { useState } from 'react';
import styled from 'styled-components';

import InputWrapper from '../InputWrapper';
import RadioInputWrapper from '../RadioInputWrapper';

import { ALARM, ALARM_MODE, ALARM_KIND, RADIO_TEXT, BUTTON } from '../../constants/inputText';

export default function RegisterAlarm() {
  const [inputValue, setInputValue] = useState({
    title: "",
    date: "",
    time: "",
    mode: "",
    kind: "",
    text: "",
  });

  const handleChange = ev => {
    const { name, value } = ev.target;
    setInputValue({
      ...inputValue, [name]: value
    });
  };

  return (
    <Container>
      <InputWrapper
        inputInfo={ALARM.TITLE}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.DATE}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.TIME}
        sendInputValue={handleChange}
      />
      <RadioInputWrapper
        radioTitle={RADIO_TEXT.TIME}
        alarmStyle={ALARM_MODE}
        sendInputValue={handleChange}
      />
      <RadioInputWrapper
        radioTitle={RADIO_TEXT.MODE}
        alarmStyle={ALARM_KIND}
        sendInputValue={handleChange}
      />
      <InputWrapper
        inputInfo={ALARM.MESSAGE}
        sendInputValue={handleChange}
      />
      <Button
        className="create-button"
        type="submit"
      >
        {BUTTON.CREATE}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: lightsteelblue;

  input {
    border: 0;
    padding: 10px;
    text-align: center;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: 0;
  border-radius: 20px;
`;