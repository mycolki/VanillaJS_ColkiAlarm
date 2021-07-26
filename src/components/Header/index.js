import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <h1>Vanilla Clock</h1>
      <h2>현재시간</h2>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  background-color: tomato;
`;