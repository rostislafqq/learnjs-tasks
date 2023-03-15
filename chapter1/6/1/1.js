const sumToFirst = (n) => {
  let count = 0;
  while (n !== 0) {
    count += n;
    n--;
  }
  return count;
};
console.log(sumToFirst(100));

const sumToSecond = (n) => {
  if (n == 0) return 0;
  return n + sumToSecond(n - 1);
};
console.log(sumToSecond(100));

const sumToThird = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumToThird(100));
