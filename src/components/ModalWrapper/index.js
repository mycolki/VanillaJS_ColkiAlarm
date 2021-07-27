import React from 'react';
import styled from 'styled-components';

export default function ModalWrapper({ children, closeModal }) {
  return (
    <Dimmed onClick={closeModal}>
      {children}
    </Dimmed>
  );
}

const Dimmed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
`;
