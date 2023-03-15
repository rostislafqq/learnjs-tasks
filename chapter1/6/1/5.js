let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//цикл
// const printList = (list) => {
//   const arr = [];
//   while (true) {
//     arr.push(list.value);
//     if (list.next !== null) {
//       list = list.next;
//     } else {
//       arr.reverse();
//       for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//       }
//       return;
//     }
//   }
// };
// printList(list);

const printList = (list) => {
  if (list.next !== null) {
    printList(list.next);
  }
  console.log(list.value);
};
printList(list);
