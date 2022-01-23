/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

/*1*/
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

/*2*/
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/*3*/
i = 0;
while (i < array.length) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
    i++;
}

/*4*/
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        console.log(array[i]);
    }
}

/*5*/
i = 0;
while (i < array.length) {
    if (i % 2 == 1) {
        console.log(array[i]);
    }
    i++;
}

/*6*/
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 1) {
        console.log(array[i]);
    }
}

/*7*/
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
        array[i] = 'okten';
        console.log(array[i]);
    }
}
console.log(array);
document.write(array);

i = 0;
while (i < array.length) {
    if (array[i] % 3 == 0) {
        array[i] = 'okten';
        console.log(array[i]);
    }
    i++;
}
console.log(array);
document.write(`<br/>`)
document.write(array);

/*8*/
let array_1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = array_1.length - 1; i >= 0; i--) {
    console.log(array_1[i]);
}

/*9*/

/*1*/
i = array_1.length - 1;
while (i >= 0) {
    console.log(array_1[i]);
    i--;
}

/*2*/
for (i = array_1.length - 1; i >= 0; i--) {
    console.log(array_1[i]);
}

/*3*/
i = array_1.length - 1;
while (i >= 0) {
    if (i % 2 == 1) {
        console.log(array_1[i]);
    }
    i--;
}

/*4*/
for (i = array_1.length - 1; i >= 0; i--) {
    if (i % 2 == 1) {
        console.log(array_1[i]);
    }
}

/*5*/
i = array_1.length - 1;
while (i >= 0) {
    if (i % 2 == 0) {
        console.log(array_1[i]);
    }
    i--;
}

/*6*/
for (i = array_1.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(array_1[i]);
    }
}

/*7*/
for (i = array_1.length - 1; i >= 0; i--) {
    if (array_1[i] % 3 == 0) {
        array_1[i] = 'okten';
        console.log(array_1[i])
    }
}
a = array_1.reverse();
console.log(a);
document.write(`<br/>`)
document.write(a);

i = array_1.length-1;
while (i >=0) {
    if (array[i] % 3 == 0) {
        array[i] = 'okten';
        console.log(array[i]);
    }
    i--;
}
console.log(a);
document.write(`<br/>`)
document.write(a);



