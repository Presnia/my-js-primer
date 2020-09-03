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