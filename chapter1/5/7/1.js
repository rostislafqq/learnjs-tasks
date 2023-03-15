const strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

const uniqueElements = (arr) => {
  return [...new Set(arr)];
};

console.log(uniqueElements(strings));
