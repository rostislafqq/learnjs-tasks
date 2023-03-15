//Какой в нём текст (без поддерева)

for (let li of document.querySelectorAll('li')) {
  console.log(li.firstChild.data);
}

//Какое число потомков – всех вложенных <li> (включая глубоко вложенные)
console.log(document.querySelectorAll('li').length);
