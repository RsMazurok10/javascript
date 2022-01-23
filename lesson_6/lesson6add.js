//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString(str, n) {
    let strArray = [];
    for (let i = 0; i <= str.length; i += n) {
        strArray.push(str.substr(i, n));
    }
    return strArray;
}

console.log(cutString('наслаждение', 3));


// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// данні до знака равлика(@),
// наявність равлика,*
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,*
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

function testEValidator(email) {

    //данні до знака равлика(@),
    let startsEmailWith = email.startsWith('@');
    if (startsEmailWith) {
        return false;
    }

    //наявність равлика
    let characterDog = email.indexOf('@');
    if (characterDog < 1) {
        return false;
    }
    //крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,*
    let characterDot = email.indexOf('.');
    if (characterDot <= characterDog + 2) {
        return false;
    }
    //функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
    let emailLowCase = email.toLowerCase();
    if (email.includes(email.toLowerCase())) {
        return true;
    }

    return true;
}

console.log(testEValidator('someemail@gmail.com'));


// - є масив
// let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sortByModules = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortByModules);


//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5

//
function count(str, symb) {
    for (let i = count = 0; i < str.length; count += (symb=== str[i++].toLowerCase())) ;

    return count;
}

console.log(count("Астрономия это наука о небесных объектах", 'а'))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let deleteString=(str, n)=>{
    return str.split(' ').splice(0,n).join(' ');
}

console.log(deleteString("Сила тяжести приложена к центру масс тела",5));
