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


  // replaces login div with signup div
  document.getElementById("regButton").addEventListener('click', function(){
   document.getElementById("signupdiv").style.display="inline";
   document.getElementById("logindiv").style.display="none";
});

// replaces signup div with login div
document.getElementById("signbtn").addEventListener('click', function(){
 document.getElementById("signupdiv").style.display="none";
 document.getElementById("logindiv").style.display="inline";
});

// replaces login div with forgot password div
document.getElementById("forgotPassButton").addEventListener('click', function(){
  document.getElementById("forgotpassdiv").style.display="inline";
  document.getElementById("logindiv").style.display="none";
});

// replaces signup div with login div
document.getElementById("loginbtn").addEventListener('click', function(){
  document.getElementById("forgotpassdiv").style.display="none";
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
    if (confirm("Login Successful!")) {
      window.location.replace("../Team-2-Tetris-Project/index.html");
    }
    //window.location.replace("../public/index.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage, " Code: ", errorCode);
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
      AvgScore: 0,
      TotalScore: 0,
      Created: new Date,
      SignedIn: new Date
    }).then(() => {
      // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
      console.log("Successfully Created!");
      if (confirm("Account Created!")) {
        window.location.replace("../Team-2-Tetris-Project/index.html");
      }
    })
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    // const user = userCredential.user;
    //window.location.replace("../public/index.html");
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    console.error("Error writing document: ", error);
    alert(errorMessage, " Code: ", errorCode);
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


document.getElementById("sendEmailButton").addEventListener('click', function(){
  const userEmail= document.getElementById("Email").value;
  
  if (confirm("Incomplete Feature: \nRequired custom template which was not completed.")) {
    window.location.replace("../Team-2-Tetris-Project/index.html");
  }
});