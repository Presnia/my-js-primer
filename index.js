/* eslint-disable no-console */

/* расстояние между двумя точками */
const x1 = a;
const y1 = c;

const x2 = b;
const y2 = d;

const newX1 = (b - a)**2;
const newY1 = (d - c)**2;

const L = Math.sqrt(newX1 + newY1);

console.log(L);

/* три числа, которые удовлетворяют теореме Пифагора */
const x1 = a;
const x2 = b;
const x3 = c;

if (a ** 2 + b ** 2 === c ** 2) {
  console.log('true');
} else {
  console.log('false');
}

/* убедиться, что три числа могут являться сторонами треугольника */
const x1 = a;
const x2 = b;
const x3 = c;

if (c < a + b && a < b + c && b < a + c ) {
  console.log('true');
} else {
  console.log('false')
}
