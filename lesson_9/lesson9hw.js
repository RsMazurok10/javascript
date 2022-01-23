//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divElement = document.createElement('div');
divElement.innerText = 'Lesson 9 homework';

divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');

divElement.style.backgroundColor = 'orange';
divElement.style.color = 'blue';
divElement.style.fontSize = '30px';
divElement.style.padding = '10px';

document.body.appendChild(divElement);
document.body.appendChild(divElement.cloneNode(true));


// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let MenuArray = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const item of MenuArray) {
    let divItem = document.createElement('li');
    divItem.innerText = item;
    menu.appendChild(divItem);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

for (const coursesArrayElement of coursesAndDurationArray) {
    let divCourse=document.createElement('div');
    divCourse.innerText=`${coursesArrayElement.title}:${coursesArrayElement.monthDuration}`;
    document.body.appendChild(divCourse);
}while (2)

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let divElement=document.createElement('div');
    divElement.classList.add('item');
    let h1=document.createElement('h1');
    h1.innerText=course.title;

    let p=document.createElement('p');
    p.innerText=course.monthDuration;
    p.style.fontSize='30px';

    console.log(divElement);
    divElement.appendChild(h1);
    divElement.appendChild(p);
    document.body.appendChild(divElement);
}

