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



describe("Shapes array", () =>{
    test("should contain all the shapes", async () =>{


        SHAPES = []                                 
        const docRef = doc(db, "shapes", "IzG2crPQqBTiwYSjawJB");
        const docSnap = await getDoc(docRef);

        const allShapes = docSnap.data();
        dbSHAPES = Object.keys(allShapes).sort()

        for (let [jk, sk] of Object.entries(dbSHAPES)) {             
            tshapelist = allShapes[sk]                      
            SHAPES[jk] = []                                           

            for (let [i, tshape] of Object.entries(tshapelist)) {   
                SHAPES[jk][i] = []                                   

                for (let [j, tpoint] of Object.entries(tshape)) {     

                    SHAPES[jk][i][j] = parseInt(tpoint)
                }
            }
        }


        expect(SHAPES).toContainEqual([
          [0,1,0,0],
          [0,1,0,0],
          [0,1,0,0],
          [0,1,0,0]
        ]);
        expect(SHAPES).toContainEqual([
          [0,1,0],  
          [0,1,0],  
          [1,1,0]   
        ]);
        expect(SHAPES).toContainEqual([
          [0,1,0],
          [0,1,0],
          [0,1,1]
        ]);
        expect(SHAPES).toContainEqual([
          [1,1,0],
          [0,1,1],
          [0,0,0]
        ]);
        expect(SHAPES).toContainEqual([
          [0,1,1],
          [1,1,0],
          [0,0,0]
        ]);
        expect(SHAPES).toContainEqual([
          [1,1,1],
          [0,1,0],
          [0,0,0]
        ]);
        expect(SHAPES).toContainEqual([
          [1,1],
          [1,1]
        ]);
    });
    
    test("should have a length of 7", () =>{
        expect(SHAPES).toHaveLength(7);
    });
  });