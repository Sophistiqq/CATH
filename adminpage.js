// Get the logout form
const logoutForm = document.querySelector('#logout-form');

// Add a submit event listener to the form
logoutForm.addEventListener('submit', e => {
	// Prevent the default form submission behavior
	e.preventDefault();

	// Log the user out using Firebase's signOut method
	firebase.auth().signOut();
});
