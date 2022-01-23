//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//a,b
let emptyArray = [];
let emptyArray1 = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        emptyArray[i] = i;
    } else {
        emptyArray1[i] = i;
    }
}
console.log(emptyArray);
console.log(emptyArray1);
//c,d
let arrayRandomWithoutDiapazon = [];
for (let i = 0; i < 20; i++) {
    arrayRandomWithoutDiapazon[i] = Math.floor(Math.random() * 100);
}
console.log(arrayRandomWithoutDiapazon);

let arrayRandomWithDiapazon = [];
for (let i = 0; i < 20; i++) {
    arrayRandomWithDiapazon[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(arrayRandomWithDiapazon);
//2,3,4
for (let i = 2; i < arrayRandomWithDiapazon.length; i = i + 3) {
    console.log(arrayRandomWithDiapazon[i]);
}

for (let i = 2; i < arrayRandomWithDiapazon.length; i = i + 3) {
    if (arrayRandomWithDiapazon[i] % 2 === 0) {
        console.log(arrayRandomWithDiapazon[i]);
    }
}

for (let i = 2; i < arrayRandomWithDiapazon.length; i = i + 3) {
    if (arrayRandomWithDiapazon[i] % 2 === 1) {
        console.log(arrayRandomWithDiapazon[i]);
    }
}
//5
for (let i = 0; i < arrayRandomWithDiapazon.length; i++) {
    if (arrayRandomWithDiapazon[i + 1] % 2 === 0) {
        console.log(arrayRandomWithDiapazon[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrayNums = [100, 250, 50, 168, 120, 345, 188];
let elem = 0;
for (let i = 0; i < arrayNums.length; i++) {
    elem += arrayNums[i];
}
console.log(elem);
elem = Math.round(elem / arrayNums.length);
console.log(elem);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArray = [];
let arrayAnother = [];
for (let i = 0; i < 5; i++) {
    randomArray[i] = Math.floor(Math.random() * 20);
    arrayAnother.push(randomArray[i] * 5);
}
console.log(randomArray);
console.log(arrayAnother);


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mixArray = ['string', 5, true, 1, 'num'];
let arrayEmptyMix = [];
for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] === 'number') {
        arrayEmptyMix.push(mixArray[i]);
    }
}
console.log(arrayEmptyMix);

// - Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.adress = city;
        }
    }
}
console.log(usersWithId);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayTen.length; i++) {
    if (arrayTen[i] % 2 === 0) {
        console.log(arrayTen[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrayEmptyTen = [];
for (let i = 0; i < arrayTen.length; i++) {
    arrayEmptyTen.push(arrayTen[i]);
}
console.log(arrayEmptyTen);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let massive = ['a', 'b', 'c'];
let str_1 = '';
for (let i = 0; i < massive.length; i++) {
    str_1 += massive[i];
}
console.log(str_1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let str_2 = '';
i = 0;
while (i < massive.length) {
    str_2 += massive[i];
    i++;
}
console.log(str_2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let str_3 = ''
for (const string of massive) {
    str_3 += string;
}
console.log(str_3);