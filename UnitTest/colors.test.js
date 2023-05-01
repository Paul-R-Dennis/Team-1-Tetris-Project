const firebase = require("firebase/app");

const { getFirestore, doc, getDoc } = require('firebase/firestore');
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



describe("Colors array", () =>{
  test("should contain all the colors", async () =>{

    COLORS = []                                 
  const docRef = doc(db, "colors", "xON25KxhwDfLTb9mYMNl");
  const docSnap = await getDoc(docRef);

const allColors = docSnap.data();

  dbCOLORS = Object.keys(allColors).sort()

  for (const [jk, sk] of Object.entries(dbCOLORS)) {          // Loop through all keys and 
     COLORS[jk] = allColors[sk]                               // populate the COLORS list
}


      expect(COLORS).toContain("#fff");
      expect(COLORS).toContain("#9b5fe0");
      expect(COLORS).toContain("#16a4d8");
      expect(COLORS).toContain("#60dbe8");
      expect(COLORS).toContain("#8bd346");
      expect(COLORS).toContain("#efdf48");
      expect(COLORS).toContain("#f9a52c");
      expect(COLORS).toContain("#d64e12");
  });
  
  test("should have a lenght of 8", () =>{
      expect(COLORS).toHaveLength(8);
  });
});