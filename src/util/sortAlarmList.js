export const sortAlarmList = (allIds, alarmsById) => {
  const sorted = [];

  for (const id of allIds) {
    sorted.push({ id: alarmsById[id] });
  }

  return sorted;
};
