  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


  const form = document.querySelector(".form");

  form.addEventListener("submit", function(event) {
  	event.preventDefault();

  	const email = form.elements.email.value;
  	const password = form.elements.password.value;

  	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
  		// User logged in successfully
  		window.location.replace("adminpage.html");
  	}).catch(function(error) {
  		// An error occurred while trying to log in
  		console.error(error.message);
  	});
  });