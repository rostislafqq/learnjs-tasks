const pow = (a, b) => {
  if (b < 1) {
    console.log('Введите число >1');
    return false;
  } else {
    return Math.pow(a, b);
  }
};

console.log(pow(3, -3));
