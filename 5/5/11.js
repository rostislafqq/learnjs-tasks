const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 29 };

const arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
  return arr.reduce((acc, val) => acc + val.age, 0) / arr.length;
};

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
