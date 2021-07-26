export const sortIds = idList => {
  if (!Array.isArray(idList)) alert('알람 등록에 실패했습니다');

  const newIdList = idList.map(id => {
    const year = id[0] + id[1] + id[2] + id[3];
    const date = id[5] + id[6] + id[8] + id[9];
    const time = id[10] + id[11] + id[13] + id[14];

    return year + date + time;
  });

  return newIdList.sort((a, b) => a - b);
};
