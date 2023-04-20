
if (document.URL.includes("profile.html")) {
    auth.onAuthStateChanged(user => {
        if (user)
        {
            db.collection('users').doc(user.uid).get().then(doc => {        
                const name = ` ${doc.data().name}`;                         // Sets  name
                Profileid.innerText = name;

                const score = ` ${doc.data().HighScore}`;                   // Displays High Score
                highscore.innerText = score;

                const games = ` ${doc.data().GamesPlayed}`;                 // Displays Games Played
                gamesplayed.innerText = games;

                const avgScore = ` ${doc.data().HighScore}`;                // Displays Average Score
                averagescore.innerText = avgScore;
            })
        }
    }) 

function change_password() {                                                // Navigates to change password page
        window.location.href = "../changepassword.html";
    }
}

function changePassword() {                                                 // changes password
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    console.log(oldPassword, newPassword, confirmPassword);

    const user = auth.currentUser;
    console.log(user);
    if (user !== null) {
        var dbRef = db.collection('users').doc(auth.currentUser.uid);
        const cred = firebase.auth.EmailAuthProvider.credential(
            user.email,
            oldPassword
        );

        user.reauthenticateWithCredential(cred);

        dbRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                var oldPass = data.password;

                

                if (oldPass == oldPassword && newPassword == confirmPassword) {
                    user.updatePassword(newPassword).then(() => {
                        // Update successful.
                        dbRef.update({
                            password: newPassword
                        })
                        document.getElementById("result-box").style.display="inline";
                        document.getElementById("logindiv").style.display="none";
                      }).catch((error) => {
                        // An error ocurred
                        console.log("Error Updating Password: ", error);
                      });
                    // !!!!! CONSOLE LOG !!!!!!!
                    console.log("Password Updated!");
                }
                else {
                    // !!!!! CONSOLE LOG !!!!!!!
                    console.log("Not Updated.");
                }
            }
        })
    }    
  }

if (document.URL.includes("profile.html")) {
  document.getElementById("home").addEventListener('click', function(){
    window.location.replace("/index.html");
  });
}


function delete_user() {
    window.location.href = "../deleteuser.html";
}

function deleteUser() {
    const user = auth.currentUser;
    const loginPassword = document.getElementById("loginPassword").value;
    // !!!!!!!!! CONSOLE LOG !!!!!!!!!!
    console.log(user, loginPassword);
    
    

    if (user !== null) {
        var dbRef = db.collection('users').doc(auth.currentUser.uid);                           // Retrieves firebase data

        const cred = firebase.auth.EmailAuthProvider.credential(
            user.email,
            loginPassword
        );

        user.reauthenticateWithCredential(cred);

        dbRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                var oldPass = data.password;
                // !!!!!!!!! CONSOLE LOG !!!!!!!!!!
                console.log(oldPass, loginPassword, user);

                if (oldPass == loginPassword) {
                    user.delete().then(() => {
                        if (confirm("Account Deleted!")) {
                            window.location.replace("index.html");
                        }
                      }).catch((error) => {
                        console.error("Error Deleting User: ", error);
                      });

                    db.collection('users').doc(user.uid).delete().then(() => {
                        console.log("Dcocument successfully deleted!");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    })
                }
                else {
                    alert("Incorrect Password!");

                }
            }
        })
    }

        
    
}