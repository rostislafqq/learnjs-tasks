const checkSpam = (str) => {
  str = str.toLowerCase();
  return str.includes('viagra') || str.includes('xxx');
};
console.log(checkSpam('viaga XXXX sad'));
