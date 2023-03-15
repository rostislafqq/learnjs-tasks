const checkAgeFirst = (age) => {
  if (!(age >= 14 && age <= 90)) {
    console.log(true);
  } else console.log(false);
};
checkAgeFirst(91);

const checkAgeSecond = (age) => {
  if (age < 14 || age > 90) {
    console.log(true);
  } else console.log(false);
};
checkAgeSecond(91);
