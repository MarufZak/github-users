const getZero = (num) => {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

export const format = (time) => {
  if (time) {
    const date = new Date(time);
    let year = getZero(date.getFullYear());
    let month = getZero(date.getMonth());
    let day = getZero(date.getDate());
    return `${year}-${month}-${day}`;
  }
};
