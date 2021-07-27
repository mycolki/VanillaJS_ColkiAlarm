import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import InputWrapper from '../InputWrapper';
import RadioInputWrapper from '../RadioInputWrapper';

import { saveAlarm } from '../../features/alarmData/alarmDataSlice';
import { ALARM, ALARM_MODE, ALARM_KIND, RADIO_TITLE, BUTTON } from '../../constants/inputText';

function RegisterAlarm() {
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
    dispatch(saveAlarm(inputValue));
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
  width: 100%;
  height: 100%;
  margin: 5px;
  text-align: center;
  border-radius: 30px;
  border: 0.3px solid #FFFFFF70;
  background-color: #FFFFFF80;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.1);

  input {
    border: 0;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
