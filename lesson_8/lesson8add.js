//написати рекурсивну функцію,
// яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль

//function getClasses(arr) {
//    let classes = document.getElementsByClassName('rules');
//    let FromArray=Array.from(classes);
//    let mapClass=FromArray.map(t=>{return t})
//        if (mapClass) {
//            arr.push(mapClass);
//        } else {
//            arr.push('');
//        }
//        return arr;
//        getClasses(arr);
//}
//
//let array = getClasses([]);
//console.log(array);

function getClasses(arr) {
    let classes = document.querySelectorAll('.rules');
    for (const class1 of classes) {
            if (class1) {
                arr.push(class1.classList[0]);
                arr.push(class1.classList[1]);
            } else {
                arr.push('');
            }
    }
    return arr;
    getClasses(arr);
}
console.log(getClasses([]));




