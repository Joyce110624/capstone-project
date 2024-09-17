
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyADJDdgq-CUIFS6fw-zGKlN7dIF4MMOI8c",
    authDomain:  "capstone-project-3ffe9.firebaseapp.com",
    projectId:  "capstone-project-3ffe9",
    storageBucket: "capstone-project-3ffe9.appspot.com",
    messagingSenderId:  "793947193098",
    appId:"1:793947193098:web:7ff3789129997210bf04f3",
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
