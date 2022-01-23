//- Напишіть код,  котрий :

//     -- отримує текст з параграфа з id "content"
let textContent = document.getElementById('content');
console.log(textContent);


//     -- отримує текст з блоку з id "rules"
let textRules=document.getElementById('rules');
console.log(textRules);

//     -- замініть текст параграфа з id 'content' на будь-який інший
textContent.innerHTML= '<a href=""><b>New text</b></a>'

//     -- замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerHTML= '<a href=""><b>Next text</b></a>'

//     -- змініть кожному елементу колір фону на червоний
let ChangeColorBackground=document.body.children;
for (const changeColorBackgroundElement of ChangeColorBackground) {
    changeColorBackgroundElement.style.backgroundColor='red';
}

//     -- змініть кожному елементу колір тексту на синій
let ChangeColorText=document.body.children;
for (const changeColorTextElement of ChangeColorText) {
    changeColorTextElement.style.color='blue';
}

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let listClass=document.getElementById('rules');
console.log(listClass.classList);


//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let ChangeColorRules=document.getElementsByClassName('fc_rules');
for (const changeColorRule of ChangeColorRules) {
changeColorRule.style.color='white';

}
