const firebase = require('firebase/app');
require('firebase/auth');

const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

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
firebase.initializeApp(firebaseConfig);

const auth = getAuth();

 describe('Firebase User', () => {
     test('should find a user with the given email and password', async () => {
         const loginEmail = 'demo@demo.com';
         const loginPassword = 'password';
         // sign in the user and check that the email is correct
         await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

         const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

         expect(userCredential.user).toBeDefined();
         auth.signOut();
     });

describe('Firebase Integration Tests', () => {
    const loginEmail = 'demo@demo.com';
    const loginPassword = 'password';
    const expectedUid = 'qVW8kxmKYxQCjhBabGobv8iY5PA2';
  
    test('checks if a specific email and password combination is associated with a specific UID', async () => {
      // Sign in the user with the given email and password
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      const uid = userCredential.user.uid;
  
      // Verify that the UID matches the expected value
      expect(uid).toBe(expectedUid);
    });
});

describe('Firebase Integration Tests', () => {
    const loginEmail = 'admin10@admin.com';
    const loginPassword = '123456789';
    const username = 'MERSED'
    const expectedUid = 'tCxSaUANAKd7lV9x1pFgc85yrai2';
  
    test('checks if a specific email and password and username combination is associated with a specific UID', async () => {
      // Sign in the user with the given email and password
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword, username);

      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword, username)
      const uid = userCredential.user.uid;
  
      // Verify that the UID matches the expected value
      expect(uid).toBe(expectedUid);
    });
});
});
