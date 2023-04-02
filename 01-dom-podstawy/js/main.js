
// Za pomoca kodu JS wykonaj następujące zadania.
// Pamietaj, aby elementom HTML dodawac ID.

// 1. W konsoli wypisz obecny tekst przycisku
const btnSubmit = document.querySelector('#btnSubmit');
console.log(btnSubmit.innerText);

// 2. dodaj formularzowi klase my-form
const form = document.querySelector('form');
form.classList.add('my-form');

// 3. Za pomoca JS dodaj do inputow jakis tekst
const inputName = document.querySelector('#inputName');
const inputMessage = document.querySelector('#inputMessage');
inputName.value = 'Helmut';
inputMessage.value = 'Musze jutro pojsc do pracy';

// 4. do elementu ul dodaj element li
{/* <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li> */}

const chatList = document.querySelector('#chatList');
chatList.innerHTML += `
    <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li>
`;

// 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

const messages = [
    {
        author: 'Pawel',
        message: 'Ale dzisiaj super dzien'
    },
    {
        author: "Magda",
        message: "Zimno jest"
    }
];

const newMessage = (author, message, htmlList) => {
    htmlList.innerHTML += `
        <li>
        <strong>${author}</strong> napisal(a)
        <p> ${message} </p>
        </li>
    `;
};

const addMessages = (messagesArray) => {
    for (const message of messagesArray) {
        newMessage(message.author, message.message, chatList);
    }
};

addMessages(messages);


// Eventy
// click i submit
// const title = document.querySelector('#title');

// const handleTitleClick = () => {
//     console.log('h1 zostal klikniety');
// };

// title.addEventListener('click', handleTitleClick);
const handleSubmit = (ev) => {
    ev.preventDefault();
    //pobranie wartosci inputow
    newMessage(inputName.value, inputMessage.value, chatList);
    // zerowanie inputow
    inputName.value = '';
    inputMessage.value = '';
    console.log('wysylam formularz');
};
form.addEventListener('submit', handleSubmit);