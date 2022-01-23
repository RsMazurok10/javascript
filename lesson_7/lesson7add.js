//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

function Person(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
}

function Address(street, suite, city, zipcode, geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
}

function Geo(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}

function Company(nameCompany, catchPhrase, bs) {
    this.nameCompany = nameCompany;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}

let geo = new Geo('-37.31', '81.59');
let company = new Company('Adidas', 'Luxury shoes', 'e-markets');
let adress = new Address('Washington Street', 'Apt.556', 'Washington', '52344-2215', geo);
let person = new Person(1, 'Leanne Graham', 'Bret', 'Sincerer@gmail.com', adress, '1-545-233-5114', 'adidas.com', company);
console.log(person);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

class Tag {
    constructor(titleOftag, action, attrs) {
        this.titleOftag = titleOftag;
        this.action = action;
        this.attrs = attrs;
    }
}

//tag a;
let titleA='<a>';
let actionA='Тег является одним из важных элементов HTML и предназначен для создания ссылок.';
let attributesA=[
    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
];

let a=new Tag(titleA,actionA,attributesA);
console.log(a);

//tag div;
 let titlediv='<div>';
 let actiondiv='Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого';
 let attributesdiv=[
     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
 ];

 let div=new Tag(titlediv,actiondiv,attributesdiv);
 console.log(div);

//tag h1;
let titleH1='<h1>';
let actionH1='Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого';
let attributesH1=[
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
    {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'},
];

let h1=new Tag(titleH1,actionH1,attributesH1);
console.log(h1);

//tag span;
let titleSpan='<span>';
let actionSpan='Тег предназначен для определения строчных элементов документа.';
let attributesSpan=[
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
    {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.'},
];

let span=new Tag(titleSpan,actionSpan,attributesSpan);
console.log(span);

//tag input;
let titleInput='<input>';
let actionInput='Тег является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса.';
let attributesInput=[
    {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
    {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
];

let input=new Tag(titleInput,actionInput,attributesInput);
console.log(input);

//tag form;
let titleForm='<form>';
let actionForm='Тег устанавливает форму на веб-странице. ';
let attributesForm=[
    {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
    {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
    {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
];

let form=new Tag(titleForm,actionForm,attributesForm);
console.log(form);

//tag option;
let titleOption='<option>';
let actionOption='ег определяет отдельные пункты списка, создаваемого с помощью контейнера ';
let attributesOption=[
    {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
];

let option=new Tag(titleOption,actionOption,attributesOption);
console.log(option);

//tag select;
let titleSelect='<select>';
let actionSelect='Тег позволяет создать элемент интерфейса в виде раскрывающегося списка.';
let attributesSelect=[
    {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
    {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
];

let select=new Tag(titleSelect,actionSelect,attributesSelect);
console.log(select);
