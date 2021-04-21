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

// рассчет отображаемого времени

export const secToTime = (timeInSeconds) => {
  const pad = (num, size) => {
    return (`000` + num).slice(size * -1);
  };


  const time = parseFloat(timeInSeconds).toFixed(3);


  const hours = Math.floor(time / 60 / 60);


  const minutes = Math.floor(time / 60) % 60;


  const seconds = Math.floor(time - minutes * 60);

  return pad(hours, 2) + `:` + pad(minutes, 2) + `:` + pad(seconds, 2);
};


