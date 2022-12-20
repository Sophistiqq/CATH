firebase.initializeApp(firebaseConfig);

document.querySelector('form').addEventListener('submit', async (event) => {
	event.preventDefault();

	// Get the form values
	const form = event.target;
	const image = form.querySelector('#create-image').files[0];
	const title = form.querySelector('#create-title').value;
	const description = form.querySelector('#create-description').value;

	try {
		// Upload the image to Firebase Storage
		const storageRef = firebase.storage().ref();
		const imageRef = storageRef.child(`images/${image.name}`);
		const snapshot = await imageRef.put(image);

		// Get the URL of the uploaded image
		const url = await imageRef.getDownloadURL();

		// Save the image URL and form data to the Firebase Realtime Database
		const databaseRef = firebase.database().ref();
		const newPostRef = databaseRef.push();
		await newPostRef.set({
			imageUrl: url,
			title: title,
			description: description
		});

		// Display a success message to the user
		alert('The image was uploaded and the form data was saved to the database successfully!');
		form.reset();
	} catch (error) {
		// Display an error message to the user
		alert('An error occurred while uploading the image or saving the form data to the database.');
		console.error(error);
	}
});
