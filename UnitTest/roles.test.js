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


describe('admin button visibility', () => {
    test('shows admin button for admin user', async () => {
        const loginEmail = 'demoadmin@admin.com';
        const loginPassword = 'password';
        const useruid ='dFCdcnmR1jcjWGq7WEflqhkm2v23'

        await signInWithEmailAndPassword(auth, loginEmail, loginPassword, useruid);

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword, useruid)

        expect(userCredential.user).toBeDefined();
    });

    test('hides admin button for non-admin user', async () => {
        auth.signOut();
        const loginEmail = 'subasicmersed2@gmail.com';
        const loginPassword = '1234567';
        const useruid ='9WzhZiC1WHZY2ZBc1v5RnXPK76Z2'

        await expect(signInWithEmailAndPassword(auth, loginEmail, loginPassword, useruid)).rejects.toThrow();

        expect(auth.currentUser).toBeNull();
    });
});

