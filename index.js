/* eslint-disable no-console */

// заполнить массив (1) 20 числами, которые делятся на 3 или на 5 или на 15 и вывести значение на экран

const a = [];
const b = [];

for (let i = 1; i <= 100; i += 1) {
  if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
    a.push(i);
  }
}
for (let i = 0; i < 20; i += 1) {
    b.push(a[i]);
}
console.log(b);
// семантически лучшее решение

const numbers = [];

let number = 3;

while (numbers.length < 20) {
  const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
  if (matched) {
    numbers.push(number);
  }
  number += 1;
}
console.log(numbers);

// посчитать произведение всех элементов, находящихся в каждой третьей позиции для (1)
let multiPlic = 1;
for (let index = 2; index < numbers.length; index += 3) {
  multiPlic *=  numbers[index];
}
console.log(multiPlic);

// посчитать среднее арифмитическое всех чисел для (1)
let arithMetic = 0;
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) { 
  sum += numbers[index];
  arithMetic = sum / numbers.length;
}
console.log(arithMetic);

// вывести матрицу таблицы умножения
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

// посчитать сумму чисел в верхнем треугольнике относительно главной диагонали для (2)

// сумма матрицы
let matrixSum = 0;
let s = [];
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    matrixSum += matrix[i][j];
  }
  s.push(matrixSum);
}
let finalSum = 0;
for (let j = 0; j < s.length; j += 1) {
    finalSum += s[j];
}
console.log(finalSum);

// сумма элементов главной диагонали
let sumD = 0;
for (let i = 0; i < 9; i += 1) {
  sumD += i**2;
}

// сумма элементов треугольника без суммы главной диагонали
let sumTriangle = 0;
sumTriangle = (finalSum - sumD) / 2;

console.log(sumTriangle);

