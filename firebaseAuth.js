// To check whether the admin is logged in

firebase.initializeApp(firebaseConfig);
	try {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// User is signed in. Show the admin page.
				
			} else {
				// No user is signed in. Redirect to the login page.
				window.location.replace("loginpage.html");
			}
		});
	} catch (error) {
		console.error(error);
	}