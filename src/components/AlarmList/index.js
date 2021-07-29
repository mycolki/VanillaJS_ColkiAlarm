import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Alarm from '../Alarm';
import { sortAlarmList } from '../../util/sortAlarmList';
import { BOX_SHADOW } from '../../constants/cssStyle';

export default function AlarmList({ clock }) {
  const { allIds, alarmsById } = useSelector(state => state.alarmData);

  return (
    <Container>
      <ul>
        {allIds && sortAlarmList(allIds, alarmsById).map((item, index) => (
          <Alarm
            clock={clock}
            key={allIds[index]}
            id={allIds[index]}
            alarm={item.id}
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
  width: 400px;
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
