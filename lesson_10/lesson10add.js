// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//document.onclick = function (e) {
//    console.log(`Назва тегу: ${e.target.tagName}, список класів:${e.target.className}, список id:${e.target.id}, розміри:
//   ${e.target.offsetWidth}px * ${e.target.offsetHeight}px`)
//}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//Модальне вікно закривається за допомогою клавіші 'esc'
//document.addEventListener('click', function Popup(t) {
//    let myDialog = document.createElement("dialog");
//    myDialog.style.border='5px solid black';
//    document.body.appendChild(myDialog)
//    let text = document.createTextNode(`Назва тегу: ${t.target.tagName}, список класів:${t.target.className}, список id:${t.target.id}, розміри:
//   ${t.target.offsetWidth}px * ${t.target.offsetHeight}px`);
//    myDialog.appendChild(text);
//    myDialog.showModal();
//});

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let checkBoxFalse = document.getElementById('check1');
let checkBoxAge = document.getElementById('check2');
let checkBoxCity = document.getElementById('check3');


let divElem = document.createElement('div')
checkBoxFalse.onclick = function (e) {
    if (checkBoxFalse.checked) {
        let statusFilt = usersWithAddress.filter(value => !value.status);
        console.log(statusFilt);
        for (const stat of statusFilt) {
            divStatus = document.createElement('div');
            divStatus.style.backgroundColor = 'lightgray'
            divStatus.style.border = '2px solid red';
            divStatus.innerHTML = `id: ${stat.id}:, name: ${stat.name}, age: ${stat.age}, status: ${stat.status}, address: city: ${stat.address.city},
            street: ${stat.address.street}, number: ${stat.address.number}`;
            divElem.appendChild(divStatus);
        }
    }
}


checkBoxAge.onclick = function (e) {
    if (checkBoxAge.checked) {
        let ageFilt = usersWithAddress.filter(value => value.age >= 29);
        console.log(ageFilt);
        for (const ageUser of ageFilt) {
            divAge = document.createElement('div');
            divAge.style.backgroundColor = 'lightgray'
            divAge.style.border = '2px solid yellow';
            divAge.innerHTML = `id: ${ageUser.id}:, name: ${ageUser.name}, age: ${ageUser.age}, status: ${ageUser.status}, 
            address: city: ${ageUser.address.city}, street: ${ageUser.address.street}, number: ${ageUser.address.number}`;
            divElem.appendChild(divAge);
        }
    }
}

checkBoxCity.onclick = function (e) {
    if (checkBoxCity.checked) {
        let cityFilt = usersWithAddress.filter(value => value.address.city == 'Kyiv');
        console.log(cityFilt);
        for (const cityUser of cityFilt) {
            divCity = document.createElement('div');
            divCity.style.backgroundColor = 'lightgray'
            divCity.style.border = '2px solid green';
            divCity.innerHTML = `id: ${cityUser.id}:, name: ${cityUser.name}, age: ${cityUser.age}, status: ${cityUser.status},
             address: city: ${cityUser.address.city},street: ${cityUser.address.street}, number: ${cityUser.address.number}`;
            divElem.appendChild(divCity);
        }
    }
}
document.body.appendChild(divElem);

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let slider = document.getElementsByClassName('carousel')[0];

let btn_next = document.getElementById('next');
let btn_prev = document.getElementById('prev');

let i = 0;

btn_prev.onclick=function (){
    if (i!==0){
        i+=500;
        slider.style.left=`${i}px`
    }else{
        i=-1500;
        slider.style.left=`${i}px`
    }
}
btn_next.onclick=function (){
    if (i!==-1500){
        i-=500;
        slider.style.left=`${i}px`
    }else{
        i=0;
        slider.style.left=`${i}px`
    }
}


//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

//для всього документу
//document.onmouseup = function () {
//    document.body.contentEditable=true;
//    document.execCommand('bold',false,null);
//}





