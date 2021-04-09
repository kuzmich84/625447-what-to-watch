export const transformTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time) - (hours * 60);

  return `${hours}h ${minutes}m`;
};

export const setDateToString = (datestring) => {
  const date = new Date(datestring);

  return `${date.toLocaleString(`en`, {month: `long`})} ${date.getDate()}, ${date.getFullYear()}`;
};


// добавляет обертку для Object.assign
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

