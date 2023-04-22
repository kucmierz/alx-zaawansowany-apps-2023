const messageForm = document.querySelector("#messageForm");
const inputAuthor = document.querySelector("#inputAuthor");
const inputMessage = document.querySelector("#inputMessage");
const messageList = document.querySelector("#messageList");

// localStorage.removeItem("messages");
let messages = JSON.parse(localStorage.getItem("messages"));
if (messages === null) {
  messages = [];
}

const renderList = () => {
  messageList.innerHTML = "";
  const sortedMessages = messages.sort((a, b) => {
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

const handleSubmit = (ev) => {
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
//   addtoHTML(newMessage);
  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));
  renderList();
};

renderList();
messageForm.addEventListener("submit", handleSubmit);
