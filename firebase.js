// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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

const form = document.querySelector(".form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Validate email and password
  if (!isValidEmail(email)) {
    // Display an error message
    return;
  }
  if (!isValidPassword(password)) {
    // Display an error message
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
    // User logged in successfully
    window.location.replace("adminpage.html");
  }).catch(function(error) {
    // An error occurred while trying to log in
    console.error(error.message);
    // Display an error message to the user
  });
});

function isValidEmail(email) {
  // Add your email validation logic here
  return true;
}

function isValidPassword(password) {
  // Add your password validation logic here
  return true;
}
