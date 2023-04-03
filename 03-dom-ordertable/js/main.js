// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli%       

const productForm = document.querySelector('#productForm');
const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const productTable = document.querySelector('#productTable');
const btnClear = document.querySelector('#btnClear');

const newProduct = (id, name, price, htmlElem) => {
    htmlElem.innerHTML += `
    <tr>
        <td id="id">${id}</td>
        <td id="name">${name}</td>
        <td id="price">$${price}</td>
    </tr>
    `
};

const resetForm = () => {
    idInput.value = '';
    nameInput.value = '';
    priceInput.value = '';
};

const clearHTMLElem = (htmlElem) => {
    htmlElem.innerHTML = '';
};

const handleSubmit = (ev) => {
    ev.preventDefault();

    newProduct(idInput.value, nameInput.value, priceInput.value, productTable);
    resetForm();
};

const handleBtnClear = (ev) => {
    clearHTMLElem(productTable);
};

productForm.addEventListener('submit', handleSubmit);
btnClear.addEventListener('click', handleBtnClear);

