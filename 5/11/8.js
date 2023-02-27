const formatDate = (date) => {
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'прямо сейчас';
  } else if (diff < 60000) {
    return `${Math.floor(diff / 1000)} сек. назад`;
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} мин. назад`;
  } else {
    let d = date.getDate();
    if (d < 10) d = '0' + d;

    let m = date.getMonth() + 1;
    if (m < 10) m = '0' + m;

    let y = date.getFullYear() % 100;
    if (y < 10) y = '0' + y;

    let h = date.getHours();
    if (h < 10) h = '0' + h;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    return `${d}.${m}.${y} ${h}:${min}`;
  }
};

console.log(formatDate(new Date(new Date() - 1)));

console.log(formatDate(new Date(new Date() - 30 * 1000)));

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
