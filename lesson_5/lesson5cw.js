/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
- створити функцію яка повертає найбільше число з масиву
- створити функцію яка повертає найменьше число з масиву
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

/*1*/
let numberMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        console.log('0');
    }
}
numberMin(3, 5, 6);

/*2*/
let numberMax = (a, b, c) => {
    if (a < b && c < b) {
        console.log(b);
    } else if (b < a && c < a) {
        console.log(a);
    } else if (a < c && b < c) {
        console.log(c);
    } else {
        console.log('0');
    }
}
numberMax(5, 11, 7);

/*3*/
let Maxarray = [10, 30, 56, 80, 21];

let arrayMax = (array) => {
    let max = array[0];
    for (let num of array) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log(arrayMax(Maxarray));

/*4*/
let Minarray = [41, 16, 56, 32, 12, 78];

let arrayMin = (array) => {
    let min = array[0];
    for (let num of array) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}

console.log(arrayMin(Minarray));

/*5*/
let Sumarray = [10, 3, 7, 15, 5];

let arraySum = (array) => {
    let sum = 0;
    for (let num of array) {
        sum = num + sum;
    }
    return sum;
}
console.log(arraySum(Sumarray));

/*6*/
let Serednum = [2, 6, 8, 3, 5];

let numSerednye = (array) => {
    let sum = 0;
    for (let num of array) {
        sum = num + sum;
    }
    return sum / array.length;
}
console.log(numSerednye(Serednum));

/*7*/
let minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (let num of arg) {
        if (min > num) {
            min = num;
        }
        if (max < num) {
            max = num;
        }
    }
    console.log(max);
    return min;
}

console.log(minMax(51, 6, 78, 123, 43));

/*8*/
let arrayRandom = (numbers) => {
    let arrayEmpty = [];
    for (let i = 0; i < numbers; i++) {
        arrayEmpty.push(Math.round(Math.random() * 100));
    }
    return arrayEmpty;
}
console.log(arrayRandom(10));

/*9*/

let arrayDiapazon = (nums, limit) => {
    let emptyArray = [];
    for (let i = 0; i < nums; i++) {
        emptyArray.push(Math.round(Math.random() * limit));
    }
    return emptyArray;
}
console.log(arrayDiapazon(10, 1000));

/*10*/
let array = [1, 2, 3, 4, 5];
let arrayReverse = (array) => {
    let arrayRev = [];
    for (let i = 0, j = array.length - 1; j >= 0; i++, j--) {
        arrayRev[j]=array[i];
    }
    return arrayRev;
}
console.log(arrayReverse(array));