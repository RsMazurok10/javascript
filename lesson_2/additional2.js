//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    alert('it is a big array with 3 or more elements');
} else {
    alert('It is a small array')
}


//   - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a = 86;
let b = 31;
let c = 67;
if ((a < b && b < c) || (a > b && b > c)) {
    console.log(`Середнє: ${b}`);
} else if ((a > b && a < c) || (a < b && a > c)) {
    console.log(`Середнє: ${a}`);
} else if ((c < a && c > b) || (c > a && c < b)) {
    console.log(`Середнє: ${c}`);
}

//Perevirka 1 number;
if ((a < b && a > c) || (a > b && a < c)) {
    console.log('True');
} else {
    console.log('False');
}

//   - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let a1 = 1;
let b1 = 4;

let result = (a1 + b1) < 4 ? 'Мало' : 'Багато';
console.log(result);

//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = +prompt('What is your number?')



let message = (num >= -100 && num < 0) ? 'Negativ' :
    (num === 0) ? 'Zero' :
        (num > 0 && num <= 100) ? 'Pozitiv' :
            'Strange number';

console.log(message);