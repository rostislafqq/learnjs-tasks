const getMaxSubSum = (arr) => {
  let result = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count += arr[i];
      if (result < count) {
        result = count;
      }
    } else {
      count = 0;
    }
  }
  return result;
};
console.log(getMaxSubSum([1, 23, -123, 1223]));
