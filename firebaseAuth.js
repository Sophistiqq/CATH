// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the auth object
const auth = firebase.auth();

// Add a listener to check the user's login status
auth.onAuthStateChanged(user => {
  if (user) {
    // User is logged in, allow access to adminpage.html
  } else {
    // User is not logged in, redirect to loginpage.html
    window.location.replace("loginpage.html");
  }
});
