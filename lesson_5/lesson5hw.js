/*створити функцію яка обчислює та повертає площу прямокутника висотою
- створити функцію яка обчислює та повертає площу кола
- створити функцію яка обчислює та повертає площу циліндру
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
/*1*/
let squareRectangle = (a, b) => {
    return a * b;
}
console.log(squareRectangle(10, 6));

/*2*/
let squareCicrcle = (r) => {
    return 3.14 * r ** 2;
}
console.log(squareCicrcle(5));

/*3*/
let squareCylider = (r, h) => {
    return 3.14 * r * h;
}
console.log(squareCylider(4, 6));

/*4*/
let arrayAnyElem = (arr) => {
    for (let elem of arr) {
        console.log(elem);
    }
}
arrayAnyElem([1, 2, 3, 4, 5]);

/*5*/
let dataP = (text) => {
    document.write(`<p> ${text} <p/>`);
    document.write(`<p> ${text} <p/>`);
}
dataP('Owu is the best');

/*6*/
let dataUl = (text) => {
    document.write(`<ul>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<ul/>`);
}
dataUl('owu is the best');

/*7*/
let dataLi = (text, num) => {
    document.write(`<ul>`);
    for (i = 0; i < num; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`<ul/>`);
}
dataLi('Owu is the best', 5);

/*8*/

let arrayMix = (array) => {
    document.write(`<ul>`);
    for (i = 0; i < array.length; i++) {
        document.write(`<li> ${array[i]} </li>`);
    }
    document.write(`<ul/>`);
}
arrayMix([false, 2, 4, true, 'six']);

/*9*/

let array = [{
    id: 1,
    name: 'Roma',
    age: 16
},
    {
        id: 2,
        name: 'Vasya',
        age: 19
    },
    {
        id: 3,
        name: 'Yura',
        age: 17
    }];

let arrayObject = (array) => {
    for (let elem of array) {
        document.write(`<div> ${elem.id}. ${elem.name}, ${elem.age} </div>`);
    }
}
arrayObject(array);