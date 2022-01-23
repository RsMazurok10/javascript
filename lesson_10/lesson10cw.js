//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//1
let divFirst = document.createElement('div');
divFirst.innerText = 'First block';
document.body.appendChild(divFirst);

let divSecond = document.createElement('div');
divSecond.innerText = 'Second block';
document.body.appendChild(divSecond);

let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
divFirst.appendChild(form1);

let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
divSecond.appendChild(form2);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');

let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');
let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');

let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');

let button = document.createElement('button');
button.innerText = 'Data';

document.body.appendChild(button);

form1.append(input1, input2);
form2.append(input3, input4);

button.addEventListener('click', function () {
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);
})
//2
document.getElementById('btn').onclick = function () {
    console.log(document.forms.formF.inputF.value);
    console.log(document.forms.formF.inputS.value);
    console.log(document.forms.formS.inputT.value);
    console.log(document.forms.formS.inputFo.value);
}

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms['formTable'];
form.onsubmit = function (t) {
    t.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let data = form.data.value;

    let table = document.createElement('table');
    table.style.border = '2px solid green';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        tr.style.border = '2px solid green';
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
            td.style.border = '2px solid green';
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badArray = ['дідько', 'бовдур', 'чорт'];
let btn = document.getElementById('bnt');
btn.onclick = function () {
    let word = document.getElementById('mates').value;
    for (let bad of badArray) {
        if (bad === word) {
            alert('Alert');
        }
    }
}

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let buttonMates=document.getElementById('bttn');
buttonMates.onclick=function (){
    let sentence=document.getElementById('matesWord').value;
    for (let badWord of badArray){
        if (sentence.includes(badWord)){
            alert('Alert');
        }
    }
}


