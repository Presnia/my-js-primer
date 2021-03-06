/* eslint-disable no-console */

// заполнить массив (1) 20 числами, которые делятся на 3 или на 5 или на 15 и вывести значение на экран

const numbers = [];

let number = 3;

for (let counter = 0; counter < 20; ) {
  const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;

  if (matched) {
    counter += 1;
    numbers.push(number);
  }

  number += 1;
}

let counter = 0;
while (counter < 20) {
  const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;

  if (matched) {
    counter += 1;
    numbers.push(number);
  }

  number += 1;
}

const upperLimit = 320;
for (let item = 3; item < upperLimit; item += 1) {
  const matched = item % 3 === 0 || item % 5 === 0 || item % 15 === 0;
  if (matched) {
    numbers.push(item);
    if (numbers.length >= 20) {
      break;
    }
  }
}

while (numbers.length < 20) {
  const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
  if (matched) {
    numbers.push(number);
  }

  number += 1;
}

console.log(numbers);

// посчитать для (1) произведение элементов, находящихся в каждой третьей позиции

let product = 1;
for (let index = 2; index < numbers.length; index += 3) {
  product *= numbers[index];
}

console.log(product);

// найти максимальное и минимальное число

let max = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (max < numbers[index]) {
    max = numbers[index];
  }
}

console.log(`max = ${max}`);

let min = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (min > numbers[index]) {
    min = numbers[index];
  }
}

console.log(`min = ${min}`);

// вывести матрицу таблицы умножения (2)

const matrix = [];

for (let i = 1; i <= 9; i += 1) {
  const row = [];
  for (let j = 1; j <= 9; j += 1) {
    row.push(i * j);
  }
  matrix.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}

// for (let i = 0; i < 9; i += 1) {
//   console.log(`i = ${i}`);
//   for (let j = 0; j < 9; j += 1) {
//     console.log(`matrix [${i}][${j}] = ${matrix[i][j]}`);
//   }
// }

// посчитать сумму чисел находящихся на главной диагонали

let sum = 0;
for (let i = 0; i < 9; i += 1) {
  sum += matrix[i][i];
}

console.log(`sum = ${sum}`);

console.log("============================");
// посчитать среднее геометрическое чисел, находящихся на вспомогательной диагонали

let mProduct = 1;
let mCount = 0;
for (let i = 0; i < 9; i += 1) {
  mProduct *= matrix[i][8 - i];
  mCount += 1;
}

console.log(
  `mProduct = ${mProduct}, mCount = ${mCount}, g.avg = ${mProduct / mCount}`
);

console.log("***********************************************");

// посчитать сумму всех элементов для каждой нечётной строки

const m = [];

for (let i = 0; i < 9; i += 1) {
  const row = [];
  for (let j = 0; j < 9; j += 1) {
    row.push(`${i}:${j}`);
  }
  m.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${m[i][j].toString()}\t`;
  }
  console.log(row);
}

console.log("============================");
// посчитать сумму всех элементов для каждого чётного столбца

for (let j = 2; j < 9; j += 2) {
  let column = "";
  for (let i = 0; i < 9; i += 1) {
    column += `${m[i][j].toString()}\t`;
  }
  console.log(column);
}
