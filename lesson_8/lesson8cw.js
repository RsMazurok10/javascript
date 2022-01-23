//1) Напишіть код, який :
// a) додає клас з назвою групи, елементу в ід main_header і колір міняє

let elementById = document.getElementById('main_header');
elementById.classList.add('newClass');
document.getElementById('main_header').classList.add('color_id');

// b) робить ширин
// у елементу ul 400px
let ulList = document.getElementsByTagName('ul');
ulList[0].style.width = '400px';
ulList[0].style.backgroundColor = 'red';

// c) робить ширину всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
    linkListElement.style.backgroundColor = 'white';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textlistElement2 = document.getElementsByClassName('listElement2');
textlistElement2[0].innerHTML = '<a href=""><b>ListElement2</b></a>'


// e) отримує всі елементи li та змінює ім колір фону на сірий
let liColor = document.getElementsByTagName('li');
for (const liColorElement of liColor) {
    liColorElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aAnchor = document.getElementsByTagName('a');
for (const aAnchorElement of aAnchor) {
    aAnchorElement.classList.add('anchor');
    console.log(aAnchorElement);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aTextContent = document.getElementsByTagName('a');
for (const aTextContentElement of aTextContent) {
    if (aTextContentElement.innerText === 'link3') {
        aTextContentElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aXXX=document.getElementsByTagName('a');
for (const aXXXelement of aXXX) {
    let classXXX=aXXXelement.innerText;
    aXXXelement.classList.add(`element_${classXXX}`);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderbackground=document.getElementsByClassName('sub-header');
subHeaderbackground[0].style.backgroundColor=prompt('write a color');
subHeaderbackground[1].style.backgroundColor=prompt('write a color');


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeadertextColor=document.getElementsByClassName('sub-header');
for (const subHeadertextColorElement of subHeadertextColor) {
    if (subHeadertextColorElement.innerText==='content 2 segment'){
        subHeadertextColorElement.style.color=prompt('Write a color of text');
    }
}


// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
let content1=document.getElementsByClassName('content_1');
content1[0].innerText=prompt('Wrtite a text');

// l) отримати елементи p та змінити їм padding на 20px
let pPadding=document.getElementsByTagName('p');
for (const pPaddingElement of pPadding) {
    pPaddingElement.style.padding='20px';
    pPaddingElement.style.backgroundColor='orange';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2Change=document.getElementsByClassName('text2');
text2Change[0].innerText='sep-2021';
