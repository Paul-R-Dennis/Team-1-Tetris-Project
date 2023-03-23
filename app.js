auth.onAuthStateChanged(user => {
    console.log(user)
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', function(e) {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
} )

//login

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})