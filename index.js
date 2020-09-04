/* eslint-disable no-console */

/* переписать в функции задачи для линий, треугольников и матрицы */

// удовлетворяют ли теореме Пифагора три числа

const rightTriangle = (a, b, c) =>
  a ** 2 + b ** 2 === c ** 2;

const showTriangle = (a, b, c) => {
  if (a ** 2 + b ** 2 === c ** 2) {
    console.log(`Треугольник со сторонами ${a}, ${b} и ${c} является прямоугольным `);
  } else {
    console.log(`Треугольник со сторонами ${a}, ${b} и ${c} не является прямоугольным `);
  }
}

const pa = 8;
const pb = 15;
const pc = 17;

const t = rightTriangle(pa, pb, pc);
showTriangle(pa, pb, pc, t);

// расстояние между двумя точками

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
  console.log(
    `Расстояние между точкой (${x1}, ${y1}) и точкой (${x2}, ${y2}) равняется ${d}`
  );

const px1 = 10;
const py1 = 10;

const px2 = 20;
const py2 = 10;

const d = getDistance(px1, py1, px2, py2);
showResult(px1, py1, px2, py2, d);

// убедиться, что три числа могут являться сторонами треугольника

const triangleSides = (a, b, c) =>
  c < a + b && a < b + c && b < a + c;

const showSides = (a, b, c) => {
  if (c < a + b && a < b + c && b < a + c) {
    console.log(`Три числа ${(a)}, ${(b)} и ${(c)} могут являться сторонами треугольника `)
  } else {
    console.log(`Три числа ${(a)}, ${(b)} и ${(c)} не могут являться сторонами треугольника `)
  }
}

const la = 7;
const lb = 9;
const lc = 12;

const long = triangleSides(la, lb, lc);
showSides(la, lb, lc, long);

// вывести матрицу таблицы умножения

const generateMatrix = () => {
  const matrix = [];

  for (let i = 0; i < 9; i += 1) {
    const row = [];
    for (let j = 0; j < 9; j += 1) {
      row.push((i + 1) * (j + 1));
    }
    matrix.push(row);
  }
  return matrix;
};

const printMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i += 1) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j += 1) {
      row += `${matrix[i][j].toString()}\t`;
    }
    console.log(row);
  }
};

const matrix = generateMatrix();

printMatrix(matrix);

// посчитать сумму чисел на главной диагонали

const getDiagonal = () => {
  let d = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    d += i ** 2;
  }
  return d;
}

const showDiagonal = (pi, pj) =>
  console.log(`Сумма чисел главной диагонали (${pi}, ${pj}) равна ${diagonal}`)

const pi = 9;
const pj = 9;

const diagonal = getDiagonal(pi, pj);
showDiagonal(pi, pj, diagonal);

// заполнить массив 20-ю числами, которые делятся на 3 или на 5 или на 15 и вывести на экран

const getArray = () => {
  const numbers = [];

  let number = 3;

  while (numbers.length < 20) {
    const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
    if (matched) {
      numbers.push(number);
    }
    number += 1;
  }
  return numbers;
}

const showArray = () =>
  console.log(`Массивом из 20 чисел, которые делятся на 3 или 5 или 15 является [${arr}]`);

const arr = getArray();
showArray(arr);

// посчитать произведение всех элементов, находящихся в каждой третьей позиции для массива

const arrMultiPlic = () => {
  let multiPlic = 1;
  for (let index = 2; index < arr.length; index += 3) {
    multiPlic *= arr[index];
  }
  return multiPlic;
}

const showMultiPlic = () =>
  console.log(`Произведением всех элементов массива, находящихся в каждой третье позиции массива будет ${ampl}`);

const ampl = arrMultiPlic();
showMultiPlic(ampl);

// посчитать среднее арифмитическое всех чисел для массива

const arrArithmetic = () => {
  let arithMetic = 0;
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
    arithMetic = sum / arr.length;
  }
  return arithMetic;
}

const showArithmetic = () =>
  console.log(`Средним арифметическим чисел массива будет ${arithmetic}`);

const arithmetic = arrArithmetic();
showArithmetic(arithmetic);