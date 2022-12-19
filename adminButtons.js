const createPostButton = document.querySelector('.create-post-button');
const deletePostButton = document.querySelector('.delete-post-button');

const createPostForm = document.querySelector('.create-post-form');
const deletePostForm = document.querySelector('.delete-post-form');

createPostButton.addEventListener('click', () => {
  createPostForm.style.display = 'block';
  deletePostForm.style.display = 'none';
});

deletePostButton.addEventListener('click', () => {
  createPostForm.style.display = 'none';
  deletePostForm.style.display = 'block';
});

// Get the logout form
const logout = document.querySelector('.logout');

// Add a submit event listener to the form
logout.addEventListener('click', e => {
	// Prevent the default form submission behavior
	e.preventDefault();

	// Log the user out using Firebase's signOut method
	firebase.auth().signOut();
});
