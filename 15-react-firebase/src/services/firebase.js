// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKNP-h7qGQgb_bOeAUPjBXCWOUVpaRXJY",
//   authDomain: "myalxproject-974ce.firebaseapp.com",
//   projectId: "myalxproject-974ce",
//   storageBucket: "myalxproject-974ce.appspot.com",
//   messagingSenderId: "166917614587",
//   appId: "1:166917614587:web:7073f8f50091cfb8ca395e",
// databaseUrl:'https://console.firebase.google.com/project/myalxproject-974ce/database/myalxproject-974ce-default-rtdb/data/~2F'
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// ponizej od Damiana:
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArOAH0-hg8429fUGpC8Ysoz_S8Bf76_HE",
    authDomain: "myalxproject-b0878.firebaseapp.com",
    projectId: "myalxproject-b0878",
    storageBucket: "myalxproject-b0878.appspot.com",
    messagingSenderId: "233330719835",
    appId: "1:233330719835:web:a0c80da7bb122be645137e",
    databaseURL: "https://myalxproject-b0878-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export const getMessages = (fn) => {
    const messagesRef = ref(database, 'messages');

    onValue(messagesRef, (snapshot) => {
        const data = snapshot.toJSON();
        // wywolujemy funkcje callback z danymi z bazy
        // * ten patern uzywany jest wtedy, kiedy funkcja jest niepromisowa

        fn(Object.values(data));
    });
}

export const saveMessage = newMessage => {
    const messagesRef = ref(database, 'messages');
    push(messagesRef, newMessage)
}