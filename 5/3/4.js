const extractCurrencyValue = (str) => {
  return +str.slice(1);
};
console.log(extractCurrencyValue('%13232'));
