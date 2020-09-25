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

const SortOrder = {
  Asc: -1,
  Desc: 1,
};

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
  ages() {
    const today = new Date();
    return today.getFullYear() - this.birthDate.getFullYear();
  },
};

const showPerson = (i) => {
  console.log(
    `The person you are interested in is ${form.firstName[i]} ${form.surName[i]} ${form.middleName[i]}, ${form.age[i]} age of old`
  );
};

// showPerson(i);

const getPerson = (i) => ({
  firstName: form.firstName[i],
  secondName: form.surName[i],
  middleName: form.middleName[i],
  age: form.age[i],
});

const getPeople = () => {
  const gp = [];
  for (let i = 0; i < 10; i += 1) {
    gp.push(getPerson(i));
  }
  return gp;
};

const comparePerson = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName <= b.lastName ? -1 : 1;
    }

    return a.middleName < b.middleName ? -1 : 1;
  }
  return a.firstName < b.firstName ? -1 : 1;
};

const sortArray = (a, compare, direction = 1) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const people = getPeople();

sortArray(people, comparePerson);

console.log(people);

// сравнить по возрасту

const comparePersonAge = (a, b) => {
  if (a.age === b.age) {
    return a.age < b.age ? -1 : 1;
  }
};

const sortArrayAge = (a, compare, direction = SortOrder.Asc) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const peopleAge = getPeople();

sortArrayAge(peopleAge, comparePersonAge);

console.log(peopleAge);

// вывести самый молодой возраст, самый старый и средний возраст

const getPeopleAge = () => {
  let sum = 0;
  let min = form.age[0];
  let max = form.age[0];
  for (let i = 0; i < 10; i += 1) {
    min = form.age[i] < min ? form.age[i] : min;
    max = form.age[i] > max ? form.age[i] : max;
    sum += form.age[i];
    mid = sum / 10;
  }
  return {
    minAge: min,
    maxAge: max,
    midAge: mid,
  };
};

const gpa = getPeopleAge();

console.log(gpa);

const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEdgeValue = (a, compare, direction = SortOrder.Asc) => {
  let max = a[0];
  for (let i = 0; i < a.length; i += 1) {
    if (compare(max, a[i]) === direction) {
      max = a[i];
    }
  }
  return max;
};



const compPeople = (p1, p2) => {
  const a = p1.age;
  const b = p2.age;

  if (a === b) return 0;
  if (a < b) return 1;
  if (a > b) return -1;
};

const val = getEdgeValue(people, compPeople, SortOrder.Asc);

console.log(val);
