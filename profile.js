
if (document.URL.includes("profile.html")) {
    auth.onAuthStateChanged(user => {
        if (user)
        {
            db.collection('users').doc(user.uid).get().then(doc => {        
                const name = ` ${doc.data().name}`;                         // Sets  name
                Profileid.innerText = name;

                const email = ` ${doc.data().email}`;                         // Sets  name
                Emailid.innerText = email;

                const score = ` ${doc.data().HighScore}`;                   // Displays High Score
                highscore.innerText = score;

                const games = ` ${doc.data().GamesPlayed}`;                 // Displays Games Played
                gamesplayed.innerText = games;

                const avgScore = ` ${doc.data().AvgScore.toFixed(1)}`;                // Displays Average Score
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
                        if (confirm("Password Changed!")) {
                            window.location.replace("profile.html");
                        }
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


//navigates to the delete user page
function delete_user() {
    window.location.href = "../deleteuser.html";
}

// deletes a user
function deleteUser() {
    const user = auth.currentUser;
    const loginPassword = document.getElementById("loginPassword").value;
    // !!!!!!!!! CONSOLE LOG !!!!!!!!!!
    console.log(user, loginPassword);
    
    

    if (user !== null) {
        var dbRef = db.collection('users').doc(auth.currentUser.uid);                           // Retrieves firebase data

        const cred = firebase.auth.EmailAuthProvider.credential(                                // creates a user credential
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

//edit name navigation
function edit_name() {
    window.location.href = "../editname.html";
}

//change name function
function changeName() {
    const user = auth.currentUser;
    let newName = document.getElementById("newName").value;
    const loginPassword = document.getElementById("loginPassword").value;
    console.log(user, newName);

    if (user !== null) {
        var dbRef = db.collection('users').doc(auth.currentUser.uid);                           // Retrieves firebase data

        const cred = firebase.auth.EmailAuthProvider.credential(                                // creates a user credential
            user.email,
            loginPassword
        );

        user.reauthenticateWithCredential(cred);

        dbRef.get().then((doc) => {
            if (doc.exists) {
                dbRef.update({
                    name: newName
                }).then(() => {
                    if (confirm("Name Updated!")) {
                        window.location.replace("profile.html");
                    }
                })
                .catch((error) => {
                    console.log("Error updating document: ", error);
                })
            }
        })
    }
}

//edit email navigation
function edit_email() {
    window.location.href = "../editemail.html";
}

//change name function
function changeEmail() {
    const user = auth.currentUser;
    let newEmail = document.getElementById("newEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
    console.log(user, newEmail);

    if (user !== null) {
        var dbRef = db.collection('users').doc(auth.currentUser.uid);                           // Retrieves firebase data

        const cred = firebase.auth.EmailAuthProvider.credential(                                // creates a user credential
            user.email,
            loginPassword
        );

        user.reauthenticateWithCredential(cred);

        dbRef.get().then((doc) => {
            if (doc.exists) {
                user.updateEmail(newEmail);

                dbRef.update({
                    email: newEmail
                }).then(() => {
                    if (confirm("Email Updated!")) {
                        window.location.replace("profile.html");
                    }
                })
                .catch((error) => {
                    alert("Error updating document: ", error);
                })
            }
        })
    }
}

//admin page navigation
function admin() {
    window.location.href = "../admin.html";
}

function profile() {
    window.location.href = "../profile.html";
}



if (document.URL.includes("profile.html")) {
    const dbRef = db.collection('roles').doc('admins');
    dbRef.get().then((doc) => {
    const data = doc.data();
    console.log(data);

    if(auth.currentUser.uid == data.Paul)
    {
        console.log("Youre an admin!");
        document.getElementById("adminbutton").style.visibility="visible";
    }
    else {
        console.log("You are not an admin");
    }
})
}