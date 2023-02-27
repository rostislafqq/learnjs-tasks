const randomInt = (a, b) => {
  return a + Math.round(Math.random() * (b - a));
};

console.log(randomInt(1, 4));
