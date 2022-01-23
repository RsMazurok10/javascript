/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]


- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

//1

//1
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

console.log(n1.replaceAll('..', ' '));
console.log(n2.replaceAll('---', ' '));
console.log(n3.replaceAll('__', ' '));

//3
function Validname(name) {
    let s =
        name
            .replaceAll('..', ' ')
            .replaceAll('---', ' ')
            .replaceAll('__', ' ');
    console.log(s);
}

Validname('Harry..Potter');
Validname('Ron---Whisley');
Validname('Hermione__Granger');


//2
let NormalizeName = (name, symbol) => {
    let arrayName = [];
    if (name.includes(symbol)) {
        let s = name.split(symbol)
        s.forEach((element) => {
            if (element) arrayName.push(element);
        })
        console.log(arrayName.join(' '));
    }
}

NormalizeName(n1, '..');

//2
let RandomNum = (number) => {
    let arrayEmpty = [];
    for (let i = 0; i < number; i++) {
        arrayEmpty.push(Math.round(Math.random() * 100));
    }
    return arrayEmpty;
}

console.log(RandomNum(10));

//3
function SortNum(numbers, limit) {
    let Emptyarray = [];
    for (let i = 0; i < numbers; i++) {
        Emptyarray.push(Math.round(Math.random() * limit));
    }
    return Emptyarray.sort((a, b) => b - a);
}

console.log(SortNum(10, 1000));

//4
function FilterNum(numbers, limit) {
    let Emptyarr = [];
    for (let i = 0; i < numbers; i++) {
        Emptyarr.push(Math.round(Math.random() * limit));
    }
    return Emptyarr.filter(value => value % 2 === 0);
}

console.log(FilterNum(10, 1000));

//5
function MapNum(numbers, limit) {
    let ArryEmpty = [];
    for (let i = 0; i < numbers; i++) {
        ArryEmpty.push(Math.round(Math.random() * limit));
    }
    return ArryEmpty.map(value => value + '');
}

console.log(MapNum(10, 100));

//6
let SortNums = (array, direction) => {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);
}

console.log(SortNums([1, 44, 23, 97, 35, 68], 'ascending'));

//7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let SortDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(SortDuration);

let FilterDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(FilterDuration);




