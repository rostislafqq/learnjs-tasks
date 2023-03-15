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
//   while (true) {
//     console.log(list.value);
//     if (list.next !== null) {
//       list = list.next;
//     } else return;
//   }
// };
// printList(list);

//рекурсия

const printList = (list) => {
  console.log(list.value);
  if (list.next !== null) {
    list = list.next;
    printList(list);
  } else {
    return;
  }
};
printList(list);
