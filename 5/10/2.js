const topSalary = (salaries) => {
  let max = -Infinity;
  let maxName;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(topSalary(salaries));
