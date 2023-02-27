const arr = [1, 2, 3];

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 5);
};

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
