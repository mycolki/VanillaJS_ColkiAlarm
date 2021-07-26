import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { TIME_FORMAT } from '../../constants/timeText';

export default function Header() {
  const [clock, setClock] = useState(moment().format(TIME_FORMAT));

  useEffect(() => {
    const clockId = setInterval(() => {
      setClock(moment().format(TIME_FORMAT));
    }, 1000);

    return () => clearInterval(clockId);
  }, []);

  return (
    <Container>
      <h1 className="app-title">Colki Alarm</h1>
      <h2 className="current-time">{clock}</h2>
    </Container>
  )
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