/* eslint-disable no-console */

// для расстояния между точками

let lVal = {
  px1: 10,
  py1: 12,
  px2: 20,
  py2: 12,
};

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
  console.log(
    `Расстояние между точкой (${x1}, ${y1}) и точкой (${x2}, ${y2}) равняется ${d}.`
  );

const d = getDistance(lVal.px1, lVal.py1, lVal.px2, lVal.py2);
showResult(lVal.px1, lVal.py1, lVal.px2, lVal.py2, d);

// для теоремы Пифагора

let tVal = {
  pa: 8,
  pb: 15,
  pc: 17,
};

const rightTriangle = (a, b, c) => a ** 2 + b ** 2 === c ** 2;

const showTriangle = (a, b, c) => {
  if (a ** 2 + b ** 2 === c ** 2) {
    console.log(
      `Треугольник со сторонами (${a}), (${b}) и (${c}) является прямоугольным.`
    );
  } else {
    console.log(
      `Треугольник со сторонами ${a}, ${b} и ${c} не является прямоугольным.`
    );
  }
};

const t = rightTriangle(tVal.pa, tVal.pb, tVal.pc);
showTriangle(tVal.pa, tVal.pb, tVal.pc, t);

// стороны треугольника

let tSides = {
  la: 7,
  lb: 9,
  lc: 12,
};

const triangleSides = (a, b, c) => c < a + b && a < b + c && b < a + c;

const showSides = (a, b, c) => {
  if (c < a + b && a < b + c && b < a + c) {
    console.log(
      `Три числа ${a}, ${b} и ${c} могут являться сторонами треугольника.`
    );
  } else {
    console.log(
      `Три числа ${a}, ${b} и ${c} не могут являться сторонами треугольника.`
    );
  }
};

const long = triangleSides(tSides.la, tSides.lb, tSides.lc);
showSides(tSides.la, tSides.lb, tSides.lc, long);

// Анкета

let i = 0;

let form = {
  firstName: [
    "Andrew",
    "Alice",
    "Matthew",
    "Elizabeth",
    "Peter",
    "Kathrine",
    "Robert",
    "Sophie",
    "George",
    "Emily",
  ],
  surName: [
    "Debysh",
    "Eve",
    "King",
    "Queen",
    "Gabriel",
    "Heigl",
    "Redford",
    "Bextor",
    "Duke",
    "Blunt",
  ],
  middleName: [
    "Yaroslav",
    "Charles",
    "Andrei",
    "Michael",
    "Gustav",
    "Antonio",
    "Steve",
    "Robin",
    "Jamie",
    "Oliver",
  ],
  age: [50, 31, 21, 86, 63, 25, 15, 40, 23, 33],
  gender: ["male", "female"],
};

const person = [form.firstName[i], form.surName[i], form.middleName[i], form.gender[i], form.age[i]];

console.log(person[i]);
