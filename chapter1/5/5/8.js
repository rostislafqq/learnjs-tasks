const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
const petya = { name: 'Петя', surname: 'Иванов', id: 2 };
const masha = { name: 'Маша', surname: 'Петрова', id: 3 };

const users = [vasya, petya, masha];

const usersMapped = users.map((e) => ({
  fullName: `${e.name} ${e.surname}`,
  id: e.id,
}));
console.log(usersMapped);

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
