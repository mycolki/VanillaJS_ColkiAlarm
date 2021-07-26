import React, { useState } from 'react';
import styled from 'styled-components';

import InputWrapper from '../InputWrapper';
import CheckboxWrapper from '../CheckboxWrapper';

import { ALARM, ALARM_MODE, ALARM_KIND, CHECKBOX_TEXT, BUTTON } from '../../constants/inputText';

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
  }

  return (
    <Container>
      <InputWrapper inputInfo={ALARM.TITLE} sendInputValue={handleChange} />
      <InputWrapper inputInfo={ALARM.DATE} sendInputValue={handleChange} />
      <InputWrapper inputInfo={ALARM.TIME} sendInputValue={handleChange} />

      <CheckboxWrapper checkboxType={CHECKBOX_TEXT.TIME} alarmStyle={ALARM_MODE} />
      <CheckboxWrapper checkboxType={CHECKBOX_TEXT.MODE} alarmStyle={ALARM_KIND} />
      <InputWrapper inputInfo={ALARM.MESSAGE} sendInputValue={handleChange} />

      <button className="create-button" type="submit">{BUTTON.CREATE}</button>
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

  .create-button {
    margin-top: 10px;
    padding: 10px;
    border: 0;
    border-radius: 20px;
  }
`;
