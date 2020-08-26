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
