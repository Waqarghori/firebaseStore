
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhdCQAdSrBaGdbVeELnfVCKzEXsgxpo_c",
  authDomain: "zenovategym.firebaseapp.com",
  projectId: "zenovategym",
  storageBucket: "zenovategym.firebasestorage.app",
  messagingSenderId: "26538049420",
  appId: "1:26538049420:web:7da2e9c395de5a840320a9",
  measurementId: "G-0RYR5233ZV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let userBtn = document.getElementById('sbtn')
userBtn.addEventListener('click', async () => {
  let name = document.getElementById('userName').value
  let email = document.getElementById('userEmail').value
  let age = document.getElementById('userAge').value


  try {
    const docRef = await addDoc(collection(db, "clint"), {
      name,
      email,
      age
    });
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('userName').value = ''
    document.getElementById('userEmail').value = ''
    document.getElementById('userAge').value = ''
  } catch (e) {
    console.error("Error adding document: ", e);
  }


})