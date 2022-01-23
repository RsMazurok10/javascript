//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let emptyArray = [
    new User(1, 'Andriy', 'Pyatov', 'pyatov@gmail.com', 38098532344),
    new User(2, 'Kolya', 'Matvienko', 'zabarnyi@gmail.com', 38098532334),
    new User(3, 'Ilya', 'Zabarnyi', 'matvienko@gmail.com', 38098532367),
    new User(4, 'Olexandr', 'Karavaev', 'karavev@gmail.com', 38098532345),
    new User(5, 'Taras', 'Stepanenko', 'stepanenko@gmail.com', 38098532387),
    new User(6, 'Mykola', 'Shaparenko', 'shaparenko@gmail.com', 38098532356),
    new User(7, 'Victor', 'Tsygankov', 'tsygnkov@gmail.com', 38098532345),
    new User(8, 'Roman', 'Yaremchuk', 'yaremchuk@gmail.com', 38098532312),
    new User(9, 'Andriy', 'Yarmolenko', 'yarmolenko@gmail.com', 380985354342),
    new User(10, 'Artem', 'Dovbyk', 'dovbyk@gmail.com', 38098535232)
]
console.log(emptyArray);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//1
let filterUser = emptyArray.filter(value => value.id % 2 === 0);
console.log(filterUser);

//2
let filterUser2 = emptyArray.filter((element) => {
    if (element.id % 2 === 0) {
        return element;
    }
});
console.log(filterUser2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//1
let sortUser = emptyArray.sort((a, b) => a.id - b.id);
console.log(sortUser);
let sortUserRev = emptyArray.sort((a, b) => b.id - a.id);
console.log(sortUserRev);
//2
let sortUser2 = emptyArray.sort((a, b) => {
    return a.id - b.id;
})
console.log(sortUser2);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayEmpty = [
    new Client(5, 'Andriy', 'Pyatov', 'pyatov@gmail.com', 38098532344, ['iphone', 'macbook', 'apple watch', 'Airpods']),
    new Client(10, 'Kolya', 'Matvienko', 'zabarnyi@gmail.com', 38098532334, ['apple watch']),
    new Client(9, 'Ilya', 'Zabarnyi', 'matvienko@gmail.com', 38098532367, ['iphone', 'apple watch']),
    new Client(1, 'Olexandr', 'Karavaev', 'karavev@gmail.com', 38098532345, ['iphone', 'macbook', 'apple watch']),
    new Client(4, 'Taras', 'Stepanenko', 'stepanenko@gmail.com', 38098532387,['apple watch']),
    new Client(8, 'Mykola', 'Shaparenko', 'shaparenko@gmail.com', 38098532356, ['iphone', 'macbook', 'apple watch', 'airPods']),
    new Client(6, 'Victor', 'Tsygankov', 'tsygnkov@gmail.com', 38098532345, ['iphone', 'macbook', 'apple watch']),
    new Client(2, 'Roman', 'Yaremchuk', 'yaremchuk@gmail.com', 38098532312, ['macbook', 'apple watch']),
    new Client(3, 'Andriy', 'Yarmolenko', 'yarmolenko@gmail.com', 380985354342, ['iphone']),
    new Client(7, 'Artem', 'Dovbyk', 'dovbyk@gmail.com', 38098535232, ['iphone', 'macbook', 'apple watch'])
];

console.log(arrayEmpty);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = arrayEmpty.sort((a, b) => a.order.length - b.order.length);

console.log(sortClient);

