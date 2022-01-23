/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

/*1*/
function squareRectangle(a, b) {
    let sRectangle = a * b;
    return sRectangle;
}

console.log(squareRectangle(5, 8));

/*2*/
function squareCircle(r) {
    const Pi = 3.14;
    let sCircle = Math.round(Pi * r ** 2);
    return sCircle;
}

console.log(squareCircle(5));

/*3*/
function squareCylinder(h, r) {
    const Pi = 3.14;
    let sCylinder = Math.round(2 * Pi * h * r);
    return sCylinder;
}

console.log(squareCylinder(10, 6));

/*4*/
function arrayAnyelement(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

arrayAnyelement([1, 2, 3, 4, 5]);

/*5*/
function textP(arg) {
    document.write(`<p>${arg}<p/>`)
    document.write(`<p>${arg}<p/>`)
    document.write(`<p>${arg}<p/>`)

}

textP('OWU is the best of the best');

/*6*/
function ulElements(text) {
    document.write(`<ul>`);
    document.write(`<li> ${text} <li/>`);
    document.write(`<li> ${text} <li/>`);
    document.write(`<li> ${text} <li/>`);
    document.write(`<ul/>`);
}

ulElements('Owu best of the best');

/*7*/
function liElements(text, num) {
    document.write(`<ul>`)
    for (i = 0; i < num; i++) {
        document.write(`<li> ${text} <li/>`);
    }
    document.write(`<ul/>`)
}

liElements('Owu is the best', 5);

/*8*/
function arrayUl(array) {
    document.write(`<ul>`)
    for (i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}<li/>`);
    }
    document.write(`<ul/>`)
}

arrayUl([10, 'name', true, 20, 'age']);

/*9*/
let array = [{
    id: 1,
    name: 'Dima',
    age: 25
},
    {
        id: 2,
        name: 'Sasha',
        age: 22
    },
    {
        id: 3,
        name: 'Andriy',
        age: 23
    }]

function arrayObject(array) {
    for (let element of array){
        document.write(`<div>${element.id}. ${element.name}, ${element.age}<div/>`);
    }
}
arrayObject(array);