const firebase = require('firebase/app');
const { initializeApp } = require('firebase/app');
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
initializeApp(firebaseConfig);

const auth = getAuth();


describe('Login', () => {
    test('User can log in with valid credentials', async () => {
        const loginEmail = 'demo12@demo.com';
        const loginPassword = '123456789';

        await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

        expect(userCredential.user).toBeDefined();
    });

    test('User cannot log in with invalid credentials', async () => {
        auth.signOut();
        const loginEmail = 'demo12@demo.com';
        const loginPassword = '12345678';

        await expect(signInWithEmailAndPassword(auth, loginEmail, 'wrong-password')).rejects.toThrow('auth/wrong-password');

        expect(auth.currentUser).toBeNull();
    });
});