//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttonFirst = document.getElementById('btn1');
let h1Text = document.getElementById('text');
buttonFirst.onclick = function () {
    h1Text.style.display = 'none';
}

buttonFirst.addEventListener('click', function () {
    this.classList.toggle('hidebtn')
})

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let buttonAge = document.getElementById('btn2');
buttonAge.onclick = function () {
    let ageInfo = document.getElementById('age').value;
    if (ageInfo < 18 && ageInfo > 0) {
        alert('Little age');
    } else if (ageInfo > 18 && ageInfo < 150) {
        alert('You"re welcome');
    } else {
        alert('This unreal age');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
menu.addEventListener('click', function () {
    this.classList.toggle('hidemenu');
});

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let list = [
    {title: 'Roman', body: 'Very clever man'},
    {title: 'Leonid', body: 'Very nice and brave man'},
    {title: 'Andriy', body: 'Very relieved and good man'}
];

let divElement=document.createElement('div');
divElement.style.backgroundColor='lightgray';
for (const item of list){
let h4=document.createElement('h4');
let p=document.createElement('p');
let btn=document.createElement('button');

h4.innerText=item.title;
p.innerText=item.body;
btn.innerText='Close body';

btn.addEventListener('click',function (){
    p.classList.toggle('pHidden');
});

divElement.append(h4,p,btn);

}
document.body.appendChild(divElement);
