import React from 'react';
import styled from 'styled-components';

export default function Header({ clock }) {
  return (
    <Container>
      <h1 className="app-title">Colki Alarm</h1>
      <h2 className="current-time">{clock}</h2>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;

  .app-title {
    margin: 0;
    padding: 10px;
  }

  .current-time {
    margin: 0;
    padding-bottom: 10px;
    font-size: 20px;
  }
`;