/* eslint-disable no-console */

/* переписать в функции задачи для линий, треугольников и матрицы */

// удовлетворяют ли теореме Пифагора три числа

function rightTriangle(a, b, c) {
  if (a ** 2 + b ** 2 === c ** 2) {
    return 'true';
  } else {
    return 'false';
  }
}
const triangle = rightTriangle(12, 13, 14);
console.log(triangle);

// расстояние между двумя точками

function twoPointsDistance(a, b, c, d) {
  const x1 = a;
  const y1 = c;

  const x2 = b;
  const y2 = d;

  const newX1 = (b - a) ** 2;
  const newY1 = (d - c) ** 2;

  const L = Math.sqrt(newX1 + newY1);

  return L;
}
const distance = twoPointsDistance(3, 7, 10, 15);
console.log(distance);

// убедиться, что три числа могут являться сторонами треугольника

function triangleSides(a, b, c) {
  if (c < a + b && a < b + c && b < a + c) {
    return 'true';
  } else {
    return 'false';
  }
}
const sidesOfTriangle = triangleSides(4,8,12);
console.log(sidesOfTriangle);