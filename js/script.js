document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your validation logic here
    // For example: check if fields are not empty
    
    // If validation is successful, you can redirect or perform other actions
    // For now, let's just log a message
    console.log(`Logged in with Email: ${email}`);
  });
  
  document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const regEmail = document.getElementById('reg-email').value;
    const regPassword = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Add your registration validation logic here
    // For example: check if passwords match, and other requirements
    
    // If validation is successful, you can register the user or perform other actions
    // For now, let's just log a message
    console.log(`Registered with Email: ${regEmail}`);
  });
  