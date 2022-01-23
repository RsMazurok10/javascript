let favorites=JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let divElem=document.createElement('div');
    divElem.innerText=JSON.stringify(favorite);
    document.body.appendChild(divElem);
};