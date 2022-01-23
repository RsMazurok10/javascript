//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let input=document.getElementsByTagName('input');

let name=input[0];
let age=input[1];

let btn=document.getElementsByTagName('button')[0];
btn.onclick=function () {
    let newName=name.value;
    let newAge=age.value;

    localStorage.setItem('Data',JSON.stringify({newName, newAge}));
}

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carForm=document.forms.form2;

carForm.onsubmit=function () {
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;

    let car={model,type,volume};

    let cars=JSON.parse(localStorage.getItem('cars'))||[];
    console.log(cars);
    cars.push(car);

    localStorage.setItem('cars',JSON.stringify(cars));
};

