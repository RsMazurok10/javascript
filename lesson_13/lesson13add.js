//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms.form_1;
let btnProducts = document.getElementById('btnProduct');

function Products(name, count, price, photo) {
    this.name = name;
    this.count = count;
    this.price = price;
    this.photo = photo;
}

btnProducts.onclick = function (e) {
    e.preventDefault();
    let array = JSON.parse(localStorage.getItem('array')) || [];
    let products = new Products(form.name.value,form.count.value,form.price.value,form.photo.value);
    array.push(products);
    localStorage.setItem('array',JSON.stringify(array));
}