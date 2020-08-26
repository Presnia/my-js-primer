/* eslint-disable no-console */

// заполнить массив (1)

const a = [];

for (let i = 1; i <= 100; i += 1) {
  if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
    a.push(i);
  }
}
for (let i = 0; i < 20; i += 1) {
  console.log(a[i]);  
}

// произведение элементов в каждой третьей позиции
const c = [];
const d = [];
const e = [];

for (let i = 1; i < 10 ; i+= 1) {
  c.push(i); 
}
for (let k = 2; k < 10; k += 1) {
  d.push(k); 
}
for (let i = 0; i < c.length; i++) {
  e.push(c[i] * d[k]); 
}

for (let i = 0; i < e.length; i += 1) {
  console.log(e) 
}