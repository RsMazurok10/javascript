let list = JSON.parse(localStorage.getItem('array')) || [];

let listProducts = document.getElementsByClassName('list_products')[0];


console.log(list);

for (const item of list) {
    let divElem = document.createElement('div');
    divElem.classList.add('divElem');

    let nameBlock = document.createElement('div');
    let name = document.createElement('h5');
    name.innerText = `Name: ${item.name}`;
    nameBlock.appendChild(name);
    divElem.appendChild(nameBlock);

    let countBlock = document.createElement('div');
    let count = document.createElement('h5');
    count.innerText = `Count: ${item.count}`;
    countBlock.appendChild(count);
    divElem.appendChild(countBlock);

    let priceBlock = document.createElement('div');
    let price = document.createElement('h5');
    price.innerText = `Price: ${item.price}`;
    priceBlock.appendChild(price);
    divElem.appendChild(priceBlock);

    let photoBlock = document.createElement('div');
    let photo = document.createElement('img');
    photo.src = item.photo
    photoBlock.appendChild(photo);
    divElem.appendChild(photoBlock);

    listProducts.appendChild(divElem);

    let btnItem = document.createElement('button');
    btnItem.innerText = 'Remove one item'
    btnItem.classList.add('item');

    btnItem.onclick = function (id) {
        let items = JSON.parse(localStorage.getItem('array')) || [];
        items.splice(id, 1);
        localStorage.setItem('array', JSON.stringify(items));
        window.location.reload()
    }
    divElem.appendChild(btnItem);
}

let btnRemove = document.getElementById('btnRemove');

btnRemove.onclick = function () {
    list = [];
    localStorage.setItem('array', JSON.stringify(list));
    window.location.reload();
}