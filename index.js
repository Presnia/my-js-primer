/* расстояние между двумя точками */
const a = 1;
const c = 8;

const b = 15;
const d = 23;

const newX1 = (b - a) ** 2;
const newY1 = (d - c) ** 2;

const isDistance = Math.sqrt(newX1 + newY1);

console.log(`Расстояние между двумя данными точками будет равняться ${isDistance}`);

/* три числа, которые удовлетворяют теореме Пифагора */
const e = 7;
const f = 9;
const g = 11;

const theorem = e ** 2 + f ** 2 === g ** 2;

const rightTriangle = theorem ? "удовлетворяют" : "не удовлетворяют"

console.log(`Стороны с длинами (${e}, ${f}, ${g}) ${rightTriangle} условиям теоремы Пифагора.`)


/* убедиться, что три числа могут являться сторонами треугольника */
const h = 8;
const k = 12;
const l = 10;

const check1 = h < k + l;
const check2 = k < h + l;
const check3 = l < k + h;

const check = check1 && check2 && check3;

const isTriangle = check ? "можно" : "нельзя";

console.log(`На сторонах с длинами(${h}, ${k}, ${l}) ${isTriangle} построить треугольник.`)
