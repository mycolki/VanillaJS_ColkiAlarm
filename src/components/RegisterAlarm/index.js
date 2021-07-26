import React from 'react';
import styled from 'styled-components';

export default function RegisterAlarm() {
  return (
    <Container>
      <Wrapper>
        <span>알람 이름을 입력해주세요요</span>
        <input type="title" name="title" />
      </Wrapper>
      <Wrapper>
        <span>날짜를 선택하세요</span>
        <input type="date" name="date" />
      </Wrapper>
      <Wrapper>
        <span>시간을 선택하세요</span>
        <input type="time" name="time" />
      </Wrapper>
      <CheckboxWrapper>
        <span>시간을 선택하세요</span>
        <div>
          <input type="checkbox" id="basic-mode" name="basic-mode" />
          <label for="basic-mode">일반 모드</label>
          <input type="checkbox" id="vibration-mode" name="vibration-mode" />
          <label for="vibration-mode">진동 모드</label>
          <input type="checkbox" id="night-mode" name="night-mode" />
          <label for="night-mode">야간 모드</label>
        </div>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <span>알람종류를 선택하세요</span>
        <div>
          <input type="checkbox" id="basic-alarm" name="basic-alarm" />
          <label for="basic-alarm">일반 알람</label>
          <input type="checkbox" id="emergency-alarm" name="emergency-alarm" />
          <label for="emergency-alarm">긴급 알람</label>
        </div>
      </CheckboxWrapper>
      <Wrapper>
        <span>알람 메시지를 입력해주세요</span>
        <input type="text" name="text" />
      </Wrapper>
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

const Wrapper = styled.div`
  margin-top: 30px;

  span {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 200px;
  }
`;

const CheckboxWrapper = styled.div`
  margin-top: 30px;

  div {
    margin-top: 10px;
  }
`;
