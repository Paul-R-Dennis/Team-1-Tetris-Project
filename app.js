auth.onAuthStateChanged(user => {
    // !!!!!!!! CONSOLE.LOG !!!!!!!!!!!
    console.log(user)
})

//logout
// const logout = document.querySelector('#logout-button');
// logout.addEventListener('click', function(e) {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log('user signed out');
//     });
// } )

//login

// db.collection('users').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data())
//     })
// })