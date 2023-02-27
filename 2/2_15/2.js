function checkAgeFirst(age) {
  return age > 18 ? true : console.log('Родители разрешили?');
}
function checkAgeSecond(age) {
  return age > 18 || console.log('Родители разрешили?');
}
checkAgeFirst(12);
