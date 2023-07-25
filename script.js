const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    alert('Please enter both username and password.');
  } else {
    // Here, you can implement server-side validation and authentication logic.
    // For simplicity, let's assume the form is valid, and the user is logged in successfully.

    // Redirect to the redirected.html page on successful login
    window.location.href = 'redirect.html';
  }
});
