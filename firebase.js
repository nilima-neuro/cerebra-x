import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTUpcK_TxDSekXzmT7LZ-81cSIqSY7YHw",
  authDomain: "cerebra-x.firebaseapp.com",
  projectId: "cerebra-x",
  storageBucket: "cerebra-x.firebasestorage.app",
  messagingSenderId: "480370290001",
  appId: "1:480370290001:web:7d3d33240351d81fac3770",
  measurementId: "G-DF0PRSDKC6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.saveResult = async function(data){

try{

await addDoc(
collection(db,"results"),
data
);

console.log("Saved successfully");

alert("Saved to database");

}

catch(error){

console.log("Database Error:", error);

alert("Database error");

}

};