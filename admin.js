import "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const user = auth.currentUser;
db.settings({ timestampsInSnapshots: true });


db.collection('users').doc('9R0QGGpw7oV2m64wfyXdUBZx5Vl1').get().then(doc => {        // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID.innerText = useruid;


})
db.collection('users').doc('dFCdcnmR1jcjWGq7WEflqhkm2v23').get().then(doc => {// Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created1.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer1.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin1.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID1.innerText = useruid;


})
db.collection('users').doc('9meWLGGXT3NrfUB8z4A4Ypu0Hs52').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created2.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer2.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin2.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID2.innerText = useruid;

})
db.collection('users').doc('k92Hj3EcIEfZ9ZZTfe2r5k7Sc0x1').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created3.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer3.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin3.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID3.innerText = useruid;
})


db.collection('users').doc('2zOiJrk8ruQnxBmAD4dkYmTe2oN2').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created4.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer4.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin4.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID4.innerText = useruid;

})

db.collection('users').doc('VgyPEmHJFaarEyoB51wDKTtdLR63').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created5.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer5.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin5.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID5.innerText = useruid;
})

db.collection('users').doc('HD9lnhVaOHflUjpWVjYS2E1vGhS2').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created6.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer6.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin6.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID6.innerText = useruid;
})

db.collection('users').doc('sD7w52fO8AMyeRDpHHC8hqiyJbe2').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created7.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer7.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin7.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID7.innerText = useruid;
})

db.collection('users').doc('Dvm7c281TadutC8hl8s1HYndJw63').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created8.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer8.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin8.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID8.innerText = useruid;
})



db.collection('users').doc('3xgAJZcUlOX4NyjnZmyKeUf2zZD3').get().then(doc => {  // Sets User name
    const create = doc.data().Created;
    const dateformat = create.toDate().toDateString();
    console.log(created);
    console.log(dateformat);
    created9.innerText = dateformat;

    const name = `${doc.data().name}`;
    identifer9.innerText = name;

    const signedin = doc.data().SignedIn;
    const signinformat = signedin.toDate().toDateString();
    signin9.innerText = signinformat + " @ " + signedin.toDate().toLocaleTimeString();

    const useruid = `${doc.id}`;
    console.log(useruid);
    UserUID9.innerText = useruid;
})



// auth
// auth.get('Ke41axOt3wXtT6on7YwGDVpIoSU2')
//     .then((userRecord) => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//     })
//     .catch((error) => {
//         console.log('Error fetching user data:', error);
//     });


// auth.getUsers()
//     .get([
//         { UserUID: '' },
//         { email: 'user2@example.com' },
//         { phoneNumber: '+15555550003' },
//         { providerId: '', providerUid: '' },
//     ])
//     .then((getUsersResult) => {
//         console.log('Successfully fetched user data:');
//         getUsersResult.users.forEach((userRecord) => {
//             console.log(userRecord);
//         });

//         console.log('Unable to find users corresponding to these identifiers:');
//         getUsersResult.notFound.forEach((userIdentifier) => {
//             console.log(userIdentifier);
//         });
//     })
//     .catch((error) => {
//         console.log('Error fetching user data:', error);
//     });