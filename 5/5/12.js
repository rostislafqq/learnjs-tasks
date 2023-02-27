const strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

const uniqueElements = (arr) => {
  return [...new Set(arr)];
};

console.log(uniqueElements(strings));
