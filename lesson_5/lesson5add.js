//- Дано натуральное число n. Выведите все числа от 1 до n.

//1
function naturF(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

naturF(5);

//2
function naturalFunc(n) {
    if (n === 1) {
        return n;
    } else {
        return naturalFunc(n - 1) + ' ' + n;
    }
}

console.log(naturalFunc(5));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

//1
function MaxMinNum(a, b) {
    if (a < b) {
        MaxMinNum(a, b - 1);
        console.log(b);
    } else if (a > b) {
        console.log(a);
        MaxMinNum(a - 1, b);
    }
}

MaxMinNum(4, 6);

//2
function maxMin(c, d) {
    if (c < d) {
        for (i = c + 1; i < d + 1; i++) {
            console.log(i);
        }
    } else if (c > d) {
        for (j = c; j > d; j--) {
            console.log(j);
        }
    } else {
        console.log(c);
    }
}

maxMin(4, 6);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//1
//function swap(arr, num) {
//       let n=arr[0];
//       arr[0]=arr[1];
//       arr[1]=n;
//    console.log(arr);
//    return;
//}
//
//swap([9,8,0,4], 3);

//2
function swap(arr, num) {
    for (i = 0; i < arr.length; i++) {
        if (i === num) {
            let index = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = index;
        }
    }
    console.log(arr);
    return
    swap(arr, num);
}


swap([9, 8, 0, 4, 5], 3);

//3
//function swap(arr, a, b) {
//   arr[a] = arr.splice(b, 1, arr[a])[0];
// }
//
// const arrNums = [8,9,0,4];
// swap( arrNums, 0, 1);

//4
//function swap(arr, num) {
//    for (i = 0; i < arr.length; i++) {
//        num= arr[i];
//        arr[i + 1] = arr[i];
//        arr[i+1] = num;
//    }
//    console.log(arr);
//}
//swap([9,8,0,4],1);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


function moveZero(array) {
    let endZero = array.length;
    for (i = 0; i < endZero; i++) {
        if (array[i] === 0) {
            if (endZero >= 2 && endZero < 100) {
                array.push(0);
                array.splice(i, 1);
                endZero--;
                i--;
            } else {
                console.log('sadad')
            }
        }
    }
    console.log(array);
    return array;
}


moveZero([0,1,0,1,1]);