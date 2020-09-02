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
// console.log(finalSum);

// сумма чисел главной диагонали
let sumD = 0;
for (let i = 0; i < 9; i += 1) {
  sumD += i**2;
}

// сумма чисел верхнего треугольника без суммы главной диагонали
let sumTriangle = 0;
sumTriangle = (finalSum - sumD) / 2;

console.log(sumTriangle);

// сумма чисел в нижнем треугольнике относительно вспомогательной диагонали без суммы диагонали
let underD = 0;
for (let i = 0; i < 8; i += 1) {
  for (let j = 1; j < 8; j += 1) {
    underD += matrix[8 - i][j];
  }
}
console.log(underD);

// посчитать среднее арифметическое сумм каждой нечётной строки

let sumRow = 0;
for (let i = 0; i < matrix.length; i += 2) {
  for (let j = 0; j < matrix.length; j += 1) {
    sumRow += matrix[i][j];
  }
  arithmeticRow = sumRow / matrix.length;
  console.log(arithmeticRow);
  sumRow = 0;
}

//посчитать сумму всех элементов для для каждого чётного сторбца

let sumColumn = 0;
for (let i = 2; i < matrix.length; i += 2) {
  for (let j = 0; j < matrix.length; j += 1) {
    sumColumn += matrix[j][i]; 
  }
  console.log(sumColumn);
}

// найти максимальное и минимальное число для (1)

let max1 = 0;
for (let i = 0; i < numbers.length; i += 1) { 
  if (max1 < numbers[i]) 
  max1 = numbers[i];
}
console.log(max1);

let min1 = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (min1 > numbers[i])
    min1 = numbers[i];
}
console.log(min1);

// найти максимальное и минимальное число для всей матрицы

let maxMatrix = 0;
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    if (maxMatrix < matrix[i][j])
      maxMatrix = matrix[i][j];
  }
}
console.log(maxMatrix);

let minMatrix = matrix[0][0];
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j++) {
    if (minMatrix > matrix[i][j])
      minMatrix = matrix[i][j];
  }
}
console.log(minMatrix);

//найти максимальное и минимальное число для каждой строки матрицы

let maxColumnMatrix = 0;
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    if (maxColumnMatrix < matrix[i][j])
      maxColumnMatrix = matrix[i][j];
  }
  console.log(maxColumnMatrix);
}

let minColumnMatrix = matrix[0][0];
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j++) {
    if (minColumnMatrix > matrix[i][j])
      minColumnMatrix = matrix[i][j];
  }
  console.log(minColumnMatrix);
}

//найти максимальное и минимальное число для каждого столбца матрицы

let maxRowMatrix = 0;
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    if (maxRowMatrix < matrix[j][i])
      maxRowMatrix = matrix[j][i];
  }
  console.log(maxRowMatrix);
}

let minRowMatrix = matrix[0][0];
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j++) {
    if (minRowMatrix > matrix[j][i])
      minRowMatrix = matrix[j][i];
  }
  console.log(minRowMatrix);
}

// найти строку с наибольшим количеством чисел больше 50-ти
/* let n = 0;

for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    const value = matrix[i][j];
    if (value > 50) {
      n += 1;
      fifty.push(underFifty);
    } 
    
  }
  
} */

