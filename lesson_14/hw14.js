// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

function WakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                console.log('Я встав');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 300)
    })
}

function BrushTeeth(teeth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (teeth) {
                console.log('Красава,маєш чисті зуби');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 500)
    })
}

function DoExercise(exercise) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exercise) {
                console.log('Нє,ну харош');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 300)
    })
}

function Breakfast(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                console.log('Добре, маєш сили для праці');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 1000)
    })
}

function ReadBook(book) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (book) {
                console.log('Мудріший будеш)');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 800)
    })
}

function Studying(study) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (study) {
                console.log('О,всьо не так зле');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 2000)
    })
}

function TimeLunch(lunch) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lunch) {
                console.log('Смачно було?');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 300)
    })
}

function Work(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money) {
                console.log('Супер,голодний не будеш');
                resolve('Некст')
            } else {
                console.log('І шо тепер???')
                reject('Бігом!!!')
            }
        }, 3000)
    })
}

function GoHome(home) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (home) {
                console.log('Вдома тепло');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 300)
    })
}

function EatDinner(dinner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dinner) {
                console.log('Можна йти спати');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 400)
    })
}

function GoBed(bed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bed) {
                console.log('Добраніч)');
                resolve('Некст')
            } else {
                reject('Бігом!!!')
            }
        }, 200)
    })
}

//WakeUp(true)
//    .then(time=>{
//        return BrushTeeth(time)
//    })
//    .then(teeth=>{
//        return DoExercise(teeth)
//    })
//    .then(exercise=>{
//        return Breakfast(exercise);
//    })
//    .then(eat=>{
//        return ReadBook(eat);
//    })
//    .then(book=>{
//        return Studying(book);
//    })
//    .then(study=>{
//        return TimeLunch(study)
//    })
//    .then(lunch=>{
//        return Work(lunch)
//    })
//    .then(money=>{
//        return GoHome(money)
//    })
//    .then(home=>{
//        return EatDinner(home)
//    })
//    .then(dinner=>{
//        return GoBed(dinner)
//    })

async function day(){
    const wake=await WakeUp(true);
    const teeth=await BrushTeeth(true);
    const exercise=await DoExercise(true);
    const breakfast=await Breakfast(true);
    const book=await ReadBook(true);
    const study=await Studying(true);
    const lunch=await TimeLunch(true);
    const work=await Work(true);
    const home=await GoHome(true);
    const dinner=await EatDinner(true);
    const bed=await GoBed(true);
}

day();