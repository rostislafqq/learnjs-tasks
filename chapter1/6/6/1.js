const makeCounter = (a) => {
  let count = 0;
  const counter = () => {
    console.log(count++);
  };
  counter.set = (value) => {
    count = value;
  };
  counter.decrease = () => count--;

  console.log(count);
};
