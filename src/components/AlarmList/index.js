import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Alarm from '../Alarm';
import { BOX_SHADOW } from '../../constants/cssStyle';

export default function AlarmList({ clock }) {
  const { alarmsById, allIds } = useSelector(state => state.alarmData);

  return (
    <Container>
      <ul>
        {allIds && allIds.map((id, index) => (
          <Alarm
            clock={clock}
            key={id}
            id={allIds[index]}
            alarm={alarmsById[allIds[index]]}
          />
        ))}
      </ul>
    </Container>
  );
}

AlarmList.propTypes = {
  clock: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  border-radius: 30px;
  border: 3px solid #FFFFFF70;
  background-color: #0984e320;
  box-shadow: ${BOX_SHADOW};

  ul {
    padding: 10px;
  }
`;
