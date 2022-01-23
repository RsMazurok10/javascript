// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


let btnPrev = document.getElementById('prev');

let btnNext = document.getElementById('next');
let divElem=document.getElementById('divka');

let elements = [];

function elemDom(divElem) {
    let elem = divElem.children;
    for (let i = 0; i < elem.length; i++) {
        if (!elem[i].classList.contains('buttons')) {
            elements.push(elem[i])
            elemDom(elem[i]);
        }
    }
}

elemDom(divElem);

let i = 0;

let childs = document.getElementsByClassName('elem');

btnNext.onclick = function () {
    if (childs.length) {
        elements[i].classList.remove('elem');
    }
    if (i >= 0 && i <= elements.length - 1) {
        i++;
    } else {
        i = 0;
    }
    elements[i].classList.add('elem');
}
btnPrev.onclick = function () {
    if (childs.length) {
        elements[i].classList.remove('elem');
    }
    if (i >= 1) {
        i--;
    } else {
        i = elements.length - 1;
    }
    elements[i].classList.add('elem');
}

