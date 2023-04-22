const productForm = document.querySelector("#productForm");
const idInput = document.querySelector("#id");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const productTable = document.querySelector("#productTable");
const orderTabeBody = document.querySelector("#orderTabeBody");
const btnClear = document.querySelector("#btnClear");
const calculateOrders = document.querySelector("#calculateOrders");
const ordersSum = document.querySelector("#ordersSum");
const ordersAvgPrice = document.querySelector("#ordersAvgPrice");

let orders = JSON.parse(localStorage.getItem("orders"));
if (orders === null) {
  orders = []; //gdy nie a nic w localstorage, to musimy utworzyc pusta tablice, aby reszta kod sie nie wykrzaczyla
}
// struktura danych: tablica obiektow
// 1. Obiekty musza miec takie same pola
// 2. kolejnosc zamowien ma znaczenie pod katem dodania do html
// let orders = [
//   {
//     id: 1,
//     name: "Banan",
//     price: 9.99,
//   },
//   {
//     id: 2,
//     name: "Wisnie",
//     price: 19.99,
//   },
//   {
//     id: 3,
//     name: "Cytryny",
//     price: 3.45,
//   },
// ];

const newProduct = (id, name, price, htmlElem) => {
  htmlElem.innerHTML += `
    <tr>
        <td id="id">${id}</td>
        <td id="name">${name}</td>
        <td id="price">$${price}</td>
    </tr>
    `;
};

// dodanie orders do tablicy html
const renderOrders = () => {
  orderTabeBody.innerHTML = "";
  for (const order of orders) {
    newProduct(order.id, order.name, order.price, orderTabeBody);
  }
};

const resetForm = () => {
  idInput.value = "";
  nameInput.value = "";
  priceInput.value = "";
};

const validID = (id) => {
  const ids = orders.map((order) => order.id);
  orders.forEach((order) => {
    ids.push(order["id"]);
  });
  if (ids.includes(id)) {
    return false;
  } else {
    return true;
  }
};

const validation = () => {
  let validationOK = false;

  if (
    nameInput.value.length > 2 &&
    priceInput.value > 0 &&
    validID(parseInt(idInput.value))
  ) {
    validationOK = true;
  }
  return validationOK;
};

const handleSubmit = (ev) => {
  ev.preventDefault();

  if (!validation()) {
    return 0;
  }

  newProduct(idInput.value, nameInput.value, priceInput.value, orderTabeBody);

  const newOrder = {
    id: parseInt(idInput.value),
    name: nameInput.value,
    price: parseFloat(priceInput.value),
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));
  resetForm();
};

const handleBtnClear = (ev) => {
  orders = [];
  localStorage.removeItem("orders");
  renderOrders();
};

const handleCalculate = (ev) => {
  const sum = orders
    .map((order) => order.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let orderAvg = orders.length === 0 ? 0 : (sum / orders.length).toFixed(2);

  ordersSum.innerHTML = sum;
  ordersAvgPrice.innerHTML = orderAvg;
};

renderOrders();
productForm.addEventListener("submit", handleSubmit);
btnClear.addEventListener("click", handleBtnClear);
calculateOrders.addEventListener("click", handleCalculate);

// console.log(orders);
// const ordersAsJSON = JSON.stringify(orders);
// console.log(x);
// const ordersFromJSON = JSON.parse(ordersAsJSON);
// localStorage.getItem("klucz"); //pobieranie wartosci ze schowka
// localStorage.setItem("klucz", "wartosc"); //pzapisanie do schowka
// localStorage.removeItem("klucz"); //usuniecie ze schowka

localStorage.setItem("orders", JSON.stringify(orders));
