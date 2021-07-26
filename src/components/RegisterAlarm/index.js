import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import InputWrapper from '../InputWrapper';
import RadioInputWrapper from '../RadioInputWrapper';

import { saveData } from '../../features/alarmData/alarmDataSlice';
import { ALARM, ALARM_MODE, ALARM_KIND, RADIO_TITLE, BUTTON } from '../../constants/inputText';

export default function RegisterAlarm() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
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
    dispatch(saveData(inputValue));
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
  cursor: pointer;
`;
