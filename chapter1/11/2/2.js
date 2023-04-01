function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log(3000).then(() => alert('выполнилось через 3 секунды'));
