//- Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'

let FirstLength = 'hello world';
console.log(FirstLength.length);

let SecondLength = 'lorem ipsum';
console.log(SecondLength.length);

let ThirdLength = 'javascript is cool';
console.log(ThirdLength.length);

//- Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

FirstLength = 'hello world';
SecondLength = 'lorem ipsum';
ThirdLength = 'javascript is cool';

console.log(FirstLength.toUpperCase());
console.log(SecondLength.toUpperCase());
console.log(ThirdLength.toUpperCase());

//Перевести до нижнього регістру настyпні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let LengthFirst = 'HELLO WORLD';
console.log(LengthFirst.toLowerCase());

let LengthSecond = 'LOREM IPSUM';
console.log(LengthSecond.toLowerCase());

let LengthThird = 'JAVASCRIPT IS COOL';
console.log(LengthThird.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let DirtyStr = ' dirty string   ';
let NewDirtyStr = DirtyStr.trim();
console.log(NewDirtyStr);
console.log(NewDirtyStr.length);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//1
let StringtoArray = (str) => {
    return str.split(' ');
}
console.log(StringtoArray('Okten Web is the best'));

//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters = (str, length) => {
    return str.slice(0, length);
}
let str = 'Okten Web is the best';
console.log(delete_characters(str, 9));

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash=(str)=>{
    return str.split(' ').join('-').toUpperCase();
}

console.log(insert_dash('Java js python kotlin'));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function FirstUpperCase(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

console.log(FirstUpperCase('okten web is the best'));
// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize=(str)=>{
    let NewString=str.split(' ');
    for (i=0;i<NewString.length;i++){
        NewString[i]=NewString[i].charAt(0).toUpperCase()+NewString[i].slice(1);
    }
    return NewString.join(' ')
}

console.log(capitalize('okten web is the best'));




















