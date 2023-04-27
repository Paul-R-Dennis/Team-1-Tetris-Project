const firebase = require("firebase/app");
require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyDvPpc-1bT0OqmfkRH4nowl-7ffP140yww",
    authDomain: "finaltetrisgamelogin.firebaseapp.com",
    databaseURL: "https://finaltetrisgamelogin-default-rtdb.firebaseio.com",
    projectId: "finaltetrisgamelogin",
    storageBucket: "finaltetrisgamelogin.appspot.com",
    messagingSenderId: "323557137776",
    appId: "1:323557137776:web:0a896cdea2d42c0e5083b5",
    measurementId: "G-EGB8S4KWPR"
};

initializeApp(firebaseConfig);

const db = firebase.firestore();
const COLORS = require('./src/tetris_main')

describe("Firestore Colors", () => {
  test("Saves and retrieves colors", async () => {

    const batch = db.batch();
    colors.forEach((COLORS) => {
      const docRef = db.collection("colors").doc();
      batch.set(docRef, { color: color });
    });
    await batch.commit();

    const snapshot = await db.collection("colors").get();
    const savedColors = snapshot.docs.map((doc) => doc.data().color);

    expect(savedColors).toEqual(colors);
  });
});