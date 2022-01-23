// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

for (const user of users) {
    let emptyArray = [];
    for (const addressKey in user.address) {
        emptyArray.push(`${addressKey}: ${user.address[addressKey]}`);
    }
    console.log(emptyArray);
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//for (const user of users) {
//    let divUser = document.createElement('div');
//    divUser.style.border='2px solid black'
//    divUser.innerText = `name: ${user.name}\n age: ${user.age}\n status: ${user.status}
//    address: \n city: ${user.address.city} \n country: ${user.address.country} \n street: ${user.address.street} \n house: ${user.address.houseNumber}`
//    document.body.appendChild(divUser);
//}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

//for (const user of users) {
//    let divUser = document.createElement('div');
//    divUser.style.border='2px solid black'
//    divUser.style.marginBottom='5px'
//
//    let divName=document.createElement('div');
//    divName.innerText=`name: ${user.name}`;
//    divName.style.backgroundColor='blue';
//
//    let divAge=document.createElement('div');
//    divAge.innerText=`age: ${user.age}`
//    divAge.style.backgroundColor='cadetblue';
//
//    let divStatus=document.createElement('div');
//    divStatus.innerText=`status: ${user.status}`
//    divStatus.style.backgroundColor='cornflowerblue';
//
//    let divAddress=document.createElement('div');
//    divAddress.innerText=`address: \n city: ${user.address.city} \n country: ${user.address.country}
//    street: ${user.address.street} \n house: ${user.address.houseNumber}`
//    divAddress.style.backgroundColor='lightblue';
//
//
//    divUser.appendChild(divName);
//    divUser.appendChild(divAge);
//    divUser.appendChild(divStatus);
//    divUser.appendChild(divAddress);
//    document.body.appendChild(divUser);
//}
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let divUser = document.createElement('div');
    divUser.style.border='2px solid black'
    divUser.style.marginBottom='5px'

    let divName=document.createElement('div');
    divName.innerText=`name: ${user.name}`;
    divName.style.backgroundColor='blue';

    let divAge=document.createElement('div');
    divAge.innerText=`age: ${user.age}`
    divAge.style.backgroundColor='cadetblue';

    let divStatus=document.createElement('div');
    divStatus.innerText=`status: ${user.status}`
    divStatus.style.backgroundColor='cornflowerblue';

    let divAddress=document.createElement('div');
    divAddress.innerText=`address:`
    divAddress.style.backgroundColor='lightblue';

    let divCity=document.createElement('div');
    divCity.innerText=`city: ${user.address.city}`
    divCity.style.backgroundColor='olive';
    divAddress.appendChild(divCity);


    let divCountry=document.createElement('div');
    divCountry.innerText=`country: ${user.address.country}`
    divCountry.style.backgroundColor='olivedrab';
    divAddress.appendChild(divCountry);

    let divStreet=document.createElement('div');
    divStreet.innerText=`street: ${user.address.street}`
    divStreet.style.backgroundColor='darkolivegreen';
    divAddress.appendChild(divStreet);

    let divHouse=document.createElement('div');
    divHouse.innerText=`house: ${user.address.houseNumber}`
    divHouse.style.backgroundColor='forestgreen';
    divAddress.appendChild(divHouse);

    divUser.appendChild(divName);
    divUser.appendChild(divAge);
    divUser.appendChild(divStatus);
    divUser.appendChild(divAddress);
    document.body.appendChild(divUser);
}

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

for (const rule of rules){
    let divRule=document.createElement('div');
    divRule.style.border='2px solid blue'

    let divTitle=document.createElement('h2');
    divTitle.innerText=rule.title;
    divTitle.style.backgroundColor='mediumpurple'
    divRule.appendChild(divTitle);

    let divBody=document.createElement('p');
    divBody.innerText=rule.body;
    divBody.style.backgroundColor='mediumorchid'
    divRule.appendChild(divBody);

    document.body.appendChild(divRule);
}
