// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli%       
// 4*. Napisz walidacje formularza spelniajaca dane kryteria
// - Pole price musi byc wieksze od 0
// - Pole name musi miec wiecej niz 2 znaki
// - Pole ID musi byc unikalne (nie moze sie powtarzac)

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

const getAllIDs = () => {
    const tds = productTable.getElementsByTagName('td');
    const ids = [];
    for (const td of tds) {
        if (td.id === "id") {
            ids.push(parseInt(td.innerText));
        }
    }
    return ids;
}

// wersja z zajec
// const isUniqueId = () => {
//     const idRows = table.querySelectorAll('tr td:first:child');
//     let isUnique = true;
//     idRows.forEach(idRow => {
//         if (idRow.innerText === orderId.value) {
//             isUnique = false
//         }
//     })
//     return isUnique;
// }

const validID = (idArray, id) => {
    if (idArray.includes(id)) {
        return false;
    } else {
        return true;
    }
}

const validation = () => {
    let validationOK = false;
    const ids = getAllIDs();

    if (nameInput.value.length > 2 && priceInput.value > 0 && validID(ids, parseInt(idInput.value))) {
        validationOK = true;
    }
    return validationOK;
}

const handleSubmit = (ev) => {
    ev.preventDefault();

    if (validation()) {
        return 0;
    }
    newProduct(idInput.value, nameInput.value, priceInput.value, productTable);
    resetForm();
};

const handleBtnClear = (ev) => {
    clearHTMLElem(productTable);
};

productForm.addEventListener('submit', handleSubmit);
btnClear.addEventListener('click', handleBtnClear);

