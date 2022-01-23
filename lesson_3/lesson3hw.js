/*-створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let numbers = [10, 20, 30, 40, 50];
let text = ['name', 'age', 'surname', 'city', 'gender'];
let mix = ['name', 'age', 10, 20, true];
console.log(text);
console.log(numbers);
console.log(mix);

/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

let array_empty = [];

array_empty[0] = 1;
array_empty[1] = 'name';
array_empty[2] = true;
array_empty[3] = 5;

console.log(array_empty);
console.log(array_empty.length);

/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

for (let i = 0; i < 10; i++) {
    document.write(`<div>Name</div>`)
}

/*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

for (let i = 1; i <= 10; i++) {
    document.write(`<div>Name ${i}</div>`)
}

/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

let x = 0;
while (x < 20) {
    x++;
    document.write(`<h1>text</h1>`);
}

/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

let y = 0;
while (y < 20) {
    y++;
    document.write(`<h1>text ${y}</h1>`);
}

/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

/*1*/
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n of num) {
    document.write(`<div>`);
    document.write(n);
    document.write(`<div/>`);
}
console.log(num);

/*2*/
let num_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < num_1.length; i++) {
    document.write(`<div>`);
    document.write(num_1[i]);
    document.write(`<div/>`);
}

let names = ['Vanya', 'Dima', 'Katya', 'Sasha', 'Misha', 'Roma', 'Tanya', 'Yulia', 'Vika', 'Denys'];
for (let name of names) {
    document.write(`<div>`);
    document.write(name);
    document.write(`<div/>`);
}
console.log(names);

let mixed = [1, 'Sasha', 2, 'Danya', 3, 'Katya', 4, 'Anya', 5, 'Taras'];
for (let m of mixed) {
    document.write(`<div>`);
    document.write(m);
    document.write(`<div/>`);
}
console.log(mixed);

let array_1 = [1, true, 'bmw', 3, 'volvo', 5, false, 'toyota', 7, 'audi'];
for (let y of array_1) {
    if (typeof y === 'boolean') {
        console.log(y);
    }
}

let array_2 = [1, true, 'bmw', 3, 'volvo', 5, false, 'toyota', 7, 'audi'];
for (let y of array_2) {
    if (typeof y === 'number') {
        console.log(y);
    }
}

let array_3 = [1, true, 'bmw', 3, 'volvo', 5, false, 'toyota', 7, 'audi'];
for (let y of array_3) {
    if (typeof y === 'string') {
        console.log(y);
    }
}

/* Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

let array_empty1 = [];
array_empty1[0] = 10;
array_empty1[1] = 'Tom';
array_empty1[2] = 30;
array_empty1[3] = 'Adam';
array_empty1[4] = true;
array_empty1[5] = 'Willy';
array_empty1[6] = 70;
array_empty1[7] = 80;
array_empty1[8] = false;
array_empty1[9] = 100;
for (let i = 0; i < array_empty1.length; i++) {
    console.log(array_empty1[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log('Krok:' + i + '');
    document.write('Krok:' + i + '');
}

for (let i = 1; i <= 100; i++) {
    console.log('Krok:' + i + '');
    document.write(`<div>`);
    document.write('Krok:' + i + '');
    document.write(`<div/>`);
}

for (let i = 1; i <= 100; i = i + 2) {
    console.log('Krok:' + i + '');
    document.write(`<div>`);
    document.write('Krok:' + i + '');
    document.write(`<div/>`);
}

/*1*/
for (let i = 0; i < 100; i += 2) {
    console.log('Krok:' + i + '');
    document.write(`<div>`);
    document.write('Krok:' + i + '');
    document.write(`<div/>`);
}

/*2*/
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log('Krok:' + i + '');
        document.write(`<div>`);
        document.write('Krok:' + i + '');
        document.write(`<div/>`);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
    console.log('Krok:' + i + '');
    document.write(`<div>`);
    document.write('Krok:' + i + '');
    document.write(`<div/>`);
    }
}





