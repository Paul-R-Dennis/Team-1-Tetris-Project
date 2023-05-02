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
db.collection('users').doc(user.uid).get().then(doc => {        // Sets User name
    const created3 = ` ${doc.data().created}`;
    created3.innerText = created3;
})
db.collection('users').doc(user.uid).get().then(doc => {        // Sets User name
    const created4 = ` ${doc.data().created}`;
    created4.innerText = created4;
})
db.collection('users').doc(user.uid).get().then(doc => {        // Sets User name
    const created5 = ` ${doc.data().created}`;
    created5.innerText = created5;
})
db.collection('users').doc(user.uid).get().then(doc => {        // Sets User name
    const created6 = ` ${doc.data().created}`;
    created6.innerText = created6;
})
db.collection('users').doc(user.uid).get().then(doc => {        // Sets User name
    const created7 = ` ${doc.data().created}`;
    created7.innerText = created7;
})




db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin = ` ${doc.data().signin}`;
    signin.innerText = signin;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin1 = ` ${doc.data().signin}`;
    signin1.innerText = signin1;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin2 = ` ${doc.data().signin}`;
    signin2.innerText = signin2;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin3 = ` ${doc.data().signin}`;
    signin3.innerText = signin3;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin4 = ` ${doc.data().signin}`;
    signin4.innerText = signin4;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin5 = ` ${doc.data().signin}`;
    signin5.innerText = signin5;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin6 = ` ${doc.data().signin}`;
    signin6.innerText = signin6;
})
db.collection('signin').doc(user.uid).get().then(doc => {        // Sets User name
    const signin7 = ` ${doc.data().signin}`;
    signin7.innerText = signin7;
})


db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID = ` ${doc.data().UserUID}`;
    UserUID.innerText = UserUID;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID1 = ` ${doc.data().UserUID}`;
    UserUID1.innerText = UserUID1;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID2 = ` ${doc.data().UserUID}`;
    UserUID2.innerText = UserUID2;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID3 = ` ${doc.data().UserUID}`;
    UserUID3.innerText = UserUID3;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID4 = ` ${doc.data().UserUID}`;
    UserUID4.innerText = UserUID4;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID5 = ` ${doc.data().UserUID}`;
    UserUID5.innerText = UserUID5;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID6 = ` ${doc.data().UserUID}`;
    UserUID6.innerText = UserUID6;
})
db.collection('UserUID ').doc(user.uid).get().then(doc => {        // Sets User name
    const UserUID7 = ` ${doc.data().UserUID}`;
    UserUID7.innerText = UserUID7;
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