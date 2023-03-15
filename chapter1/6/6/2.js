function sum(num) {
  let currentSum = num;

  function nextSum(nextNum) {
    currentSum += nextNum;
    return nextSum;
  }

  nextSum.toString = function () {
    return currentSum;
  };

  return nextSum;
}

console.log(sum(0)(1)(2)(3)(4)(5).toString());
