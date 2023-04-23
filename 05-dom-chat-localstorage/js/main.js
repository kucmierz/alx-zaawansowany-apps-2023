const messageForm = document.querySelector("#messageForm");
const inputAuthor = document.querySelector("#inputAuthor");
const inputMessage = document.querySelector("#inputMessage");
const searchForm = document.querySelector("#searchForm");
const inputSearch = document.querySelector("#inputSearch");

// // localStorage.removeItem("messages");
// let messages = JSON.parse(localStorage.getItem("messages"));
// if (messages === null) {
//   messages = [];
// }

// ES9 - Nullish operator
let messages = JSON.parse(localStorage.getItem("messages") ??[]);

const renderList = (msgArray) => {
  messageList.innerHTML = "";
  const sortedMessages = msgArray.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });
  sortedMessages.forEach((msg) => {
    addtoHTML(msg);
  });
};

const addtoHTML = (msg) => {
  messageList.innerHTML += `
        <li>
            <strong>${msg.author}:</strong>
            <span>${msg.message}</span>
        </li>
        `;
};

const getNewID = () => {
  let id = 1;
  if (messages.length > 0) {
    const ids = messages.map((msg) => msg.id);
    id = ids.reduce((max, number) => (number > max ? number : max), ids[0]);
  }
  return id;
};

const validate = () => {
  let isOK = false;
  if (inputAuthor.value.length > 0 && inputMessage.value.length > 2) {
    isOK = true;
  }
  return isOK;
};

const handleAddSubmit = (ev) => {
  ev.preventDefault();
  if (!validate()) {
    return 0;
  }
  //add new message
  const newId = getNewID();
  const newMessage = {
    id: newId,
    author: inputAuthor.value,
    message: inputMessage.value,
  };
  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));
  renderList(messages);
  inputAuthor.value = '';
  inputMessage.value = '';
};

const handleSearchSubmit = (ev) => {
  ev.preventDefault();
  const searchPhrase = inputSearch.value.toLowerCase();
  // const results = [];
  // messages.forEach(msg => {
  //   if ((msg.author.toLowerCase().includes(searchPhrase) || (msg.message.toLowerCase().includes(searchPhrase)))) {
  //     results.push(msg);
  //   }
  // });

  const results = messages.filter(msg => {
    return (msg.author.toLowerCase().includes(searchPhrase) || (msg.message.toLowerCase().includes(searchPhrase)))
  });
  
  renderList(results);
  inputSearch.value = '';
};

renderList(messages);
messageForm.addEventListener("submit", handleAddSubmit);
searchForm.addEventListener("submit", handleSearchSubmit);
