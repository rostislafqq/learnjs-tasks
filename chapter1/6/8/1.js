// const printNumbers = (from, to) => {
//   const breakMe = setInterval(() => {
//     if (from <= to) {
//       console.log(from);
//       from++;
//     } else {
//       clearInterval(breakMe);
//     }
//   }, 1000);
// };
const printNumbers = (from, to) => {
  setTimeout(function m() {
    if (from <= to) {
      console.log(from);
      ++from;
      setTimeout(m, 1000);
    } else return 0;
  }, 1000);
};

printNumbers(1, 4);
