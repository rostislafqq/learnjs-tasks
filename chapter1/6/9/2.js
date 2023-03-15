function f(x) {
  console.log(x);
}
const delay = (func, num) => {
  return function () {
    setTimeout(() => {
      func.apply(this, arguments);
    }, num);
  };
};

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test'); // показывает "test" после 1000 мс
f1500('test'); // показывает "test" после 1500 мс
