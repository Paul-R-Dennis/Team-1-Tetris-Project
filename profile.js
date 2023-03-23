import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

    const firebaseConfig = {
    apiKey: "AIzaSyDvPpc-1bT0OqmfkRH4nowl-7ffP140yww",
    authDomain: "finaltetrisgamelogin.firebaseapp.com",
    databaseURL: "https://finaltetrisgamelogin-default-rtdb.firebaseio.com",
    projectId: "finaltetrisgamelogin",
    storageBucket: "finaltetrisgamelogin.appspot.com",
    messagingSenderId: "323557137776",
    appId: "1:323557137776:web:31381bfeac03ef3f5083b5",
    measurementId: "G-EGB8S4KWPR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
var user = firebase.auth().currentUser;

if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const highScore = user.highScore;
}