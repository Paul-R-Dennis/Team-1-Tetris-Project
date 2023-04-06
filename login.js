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
  db.settings({timestampsInSnapshots: true});



  document.getElementById("regButton").addEventListener('click', function(){
   document.getElementById("signupdiv").style.display="inline";
   document.getElementById("logindiv").style.display="none";
});

document.getElementById("signbtn").addEventListener('click', function(){
 document.getElementById("signupdiv").style.display="none";
 document.getElementById("logindiv").style.display="inline";

});

// login
  document.getElementById("loginButton").addEventListener('click', function(){
   const loginEmail= document.getElementById("loginEmail").value;
   const loginPassword =document.getElementById("loginPassword").value;
   const username =document.getElementById("name").value;

   auth.signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    console.log(userCredential.user);
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("logindiv").style.display="none";
    //window.location.replace("../public/index.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("logindiv").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});

//sign up
  document.getElementById("signupButton").addEventListener('click', function(){

   const signupEmail= document.getElementById("signupEmail").value;
   const signupPassword =document.getElementById("signupPassword").value;
   const username =document.getElementById("name").value;
   

   auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
  .then(userCredential => {
    db.collection('users').doc(userCredential.user.uid).set({
      name: username,
      email: signupEmail,
      password: signupPassword,
      HighScore: 0,
      GamesPlayed: 0,
      AvgScore: 0
    }).then(() => {
      console.log("Successfully Created!");
    })
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    // const user = userCredential.user;
    // document.getElementById("result-box").style.display="inline";
    //  document.getElementById("signupdiv").style.display="none";
    //window.location.replace("../public/index.html");
  }).catch((error) => {
     console.error("Error writing document: ", error);

  });
});

//logout
// document.getElementById("logoutButton").addEventListener('click', function(){
//    signOut(auth).then(() => {
//       document.getElementById("result-box").style.display="none";
//         document.getElementById("logindiv").style.display="inline";
//    }).catch((error) => {
//       document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//    });

//  });

//return home
document.getElementById("home").addEventListener('click', function(){
  window.location.replace("/index.html");
})