import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Header({ clock }) {
  return (
    <Container>
      <h1 className="app-title">Colki Alarm</h1>
      <span className="current-time">{clock}</span>
    </Container>
  );
}

Header.propTypes = {
  clock: PropTypes.string.isRequired,
};

const Container = styled.div`
  text-align: center;

  .app-title {
    margin: 0;
    padding: 20px;
  }

  .current-time {
    display: block;
    padding-bottom: 20px;
    font-weight: 100px;
    font-size: 20px;
    color: white;
  }
`;
