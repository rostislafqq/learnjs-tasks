const truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '…';
};
console.log(truncate('asddasdasasd', 3));
