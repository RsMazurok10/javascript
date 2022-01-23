//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function cars(model,producer,year,maxSpeed,engine){
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engine=engine;
    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info=function (){
        console.log(`модель-${this.model},\n виробник-${this.producer},\n рік випуску-${this.year},\n маскимальна швидкість-${this.maxSpeed},\n об'єм двигуна-${this.engine}`);
    }
    this.increaseMaxSpeed=function (newSpeed){
        this.maxSpeed+=newSpeed;
    }
    this.changeYear=function (newValue){
        this.year=newValue;
    }
    this.addDriver=function (driver){
        this.driver=driver;
    }
}

let car=new cars('Audi','Germany',2018,240,3.0);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(60);
car.changeYear(2020);
car.addDriver({name:'Adam',age:32});
console.log(car);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class cars2{
    constructor(model,producer,year,maxSpeed,engine) {
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine=engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info(){
        console.log(` модель-${this.model},\n виробник-${this.producer},\n рік випуску-${this.year},\n маскимальна швидкість-${this.maxSpeed},\n об'єм двигуна-${this.engine}`);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed=this.maxSpeed+newSpeed;
    }
    changeYear(newValue){
        this.year=newValue;
    }
    addDriver(driver){
        this.driver=driver;
    }
}

let car2=new cars2('Audi','Germany',2018,240,3.0)
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(60);
car2.changeYear(2020);
car2.addDriver({name:'Adam',age:32});
console.log(car2);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class popelushka{
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}

let popelushkaArray=[
    new popelushka('Diana',23,37),
    new popelushka('Anna',21,39),
    new popelushka('Olexa',25,39),
    new popelushka('Iryna',23,36),
    new popelushka('Olya',22,37),
    new popelushka('Yulia',22,38),
    new popelushka('Vika',20,36),
    new popelushka('Nika',19,38),
    new popelushka('Katya',18,39),
    new popelushka('Halya',23,40)
];

console.log(popelushkaArray);

class prince{
    constructor(name,age,shoe) {
        this.name=name;
        this.age=age;
        this.shoe=shoe;
    }
}

let princeObj=new prince('Adam',29,38);
console.log(princeObj);

let paar=(popelushkaArray,princeObj)=>{
    for (element of popelushkaArray){
        if (element.footSize==princeObj.shoe){
            return`Your popelushka is ${element.name}`
        }
    }
}

console.log(paar(popelushkaArray,princeObj));

let findPopelushka=popelushkaArray.find(value => value.footSize==princeObj.shoe);

console.log(findPopelushka);


