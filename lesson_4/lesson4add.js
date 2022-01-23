//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function argFunc() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(argFunc(3));
console.log(argFunc(4, 7));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


let arrayFirst=[4,7,2,1,7];
let arraySecond=[5,3,1,6,5];
function arraySum(arrayFirst, arraySecond) {
    let arrayEmpty=[];
    for (i = 0; i < arrayFirst.length; i++) {
        arrayEmpty.push(arrayFirst[i] + arraySecond[i]);
    }
    return arrayEmpty;
}
console.log(arraySum(arrayFirst,arraySecond));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrayKey(object){
    let arrayEmptyKeys=[];
    for (const arrayEmptyKey of object) {
        for(let key in arrayEmptyKey){
            arrayEmptyKeys.push(key);
        }
    }
    return arrayEmptyKeys;
}
console.log(arrayKey([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arrayValue(objectValues){
    let arrayEmptyValues=[];
    for (const arrayEmptyValue of objectValues) {
        for(let key in arrayEmptyValue){
            arrayEmptyValues.push(arrayEmptyValue[key]);
        }
    }
    return arrayEmptyValues;
}
console.log(arrayValue([{name: 'Dima', age: 13}, {model: 'Camry'}]));