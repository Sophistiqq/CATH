firebase.initializeApp(firebaseConfig);

// Get the logout form
const logoutForm = document.querySelector('#logout-form');

// Add a submit event listener to the form
logoutForm.addEventListener('submit', e => {
	// Prevent the default form submission behavior
	e.preventDefault();

	// Log the user out using Firebase's signOut method
	firebase.auth().signOut();
});


firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in. Show the admin page.
	} else {
		// No user is signed in. Redirect to the login page.
		if (window.location.pathname !== '/loginpage.html') {
			window.location.replace("loginpage.html");
		}
	}
});