/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

function numberMin(arg1, arg2, arg3) {
    if (arg1 < arg2 && arg1 < arg3) {
        console.log(arg1);
    } else if (arg2 < arg1 && arg2 < arg3) {
        console.log(arg2);
    } else if (arg3 < arg1 && arg3 < arg2) {
        console.log(arg3);
    }
}

numberMin(10, 5, 29);

function numberMax(arg1, arg2, arg3) {
    if (arg1 < arg3 && arg2 < arg3) {
        console.log(arg3);
    } else if (arg1 < arg2 && arg3 < arg2) {
        console.log(arg2);
    } else if (arg2 < arg1 && arg3 < arg1) {
        console.log(arg1);
    }else {
        console.log
    }
}

numberMax(50, 10, 25);

/*- створити функцію яка повертає найбільше число з масиву
- створити функцію яка повертає найменьше число з масиву*/

let array_num = [10, 20, 40, 60, 80];

function arrayMax(array) {
    let max = array[0];
    for (const number of array) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

console.log(arrayMax(array_num));

function arrayMin(array) {
    let min = array[0];
    for (const number of array) {
        if (number < min) {
            min = number;
        }
        return min;
    }
}

console.log(arrayMin(array_num));

/*створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*1*/
let array_num_1 = [1, 2, 4, 6, 8];

function arraySum1(array) {
    let sum = 0;
    for (const num of array) {
        sum = num + sum;
    }
    return sum;
}

console.log(arraySum1(array_num_1));

/*2*/

function arraySum2(array) {
    let sum = array_num_1[0] + array_num_1[1] + array_num_1[2] + array_num_1[3] + array_num_1[4];
    return sum;
}

console.log(arraySum2(array_num_1));

function arraySered(array) {
    let sum = 0;
    for (const num of array) {
        sum = sum + num;
    }
    return sum / array.length;
}

console.log(arraySered(array_num_1));

/* створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/

function anyNum(argument) {
    let min = arguments[0];
    let max = arguments[0];
    for (const num of arguments) {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    }
    console.log(max);
    return min;
}

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

console.log(anyNum(48, 5, 10, 25, 70));

function randomNum(numbers) {
    let randomArray = [];
    for (i = 0; i < numbers; i++) {
        randomArray.push(Math.round(Math.random() * 100));
    }
    return randomArray;
}

console.log(randomNum(10));

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.*/
function randomDiapazon(numbers, limit) {
    let arrayEmpty = [];
    for (i = 0; i < numbers; i++) {
        arrayEmpty.push(Math.round(Math.random() * limit));
    }
    return arrayEmpty;
}

console.log(randomDiapazon(10, 100));

/*Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/
let arr=[1,2,3,4,5];
function arrayBack(arr) {
    let arrReverse = [];
    for (let i = 0, j = arr.length - 1; j >= 0; i++, j--) {
        arrReverse[j] = arr[i];
    }
    return arrReverse;
}
console.log(arrayBack(arr));



