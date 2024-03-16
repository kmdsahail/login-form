document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    var spinner = document.getElementById("spinner");

    // Clear any existing error messages
    errorMessage.innerText = "";

    // Validate username and password
    if (!username.trim()) {
      errorMessage.innerText = "Please enter your username";
      return;
    }

    if (!password.trim()) {
      errorMessage.innerText = "Please enter your password";
      return;
    }

    // Display loading spinner
    spinner.style.display = "inline-block";

    // Simulate asynchronous login process (replace with your actual login logic)
    setTimeout(function () {
      // For demonstration purposes, let's assume the correct credentials are 'user' and 'password'
      if (username === "sohail" && password === "63000") {
        alert("Login successful");
        // You can redirect the user to another page here if needed
      } else {
        errorMessage.innerText = "Invalid username or password";
      }
      // Hide loading spinner
      spinner.style.display = "none";
    }, 1500); // Simulating a delay of 1.5 seconds for login process
  });

// Clear error messages when input fields are corrected
document.getElementById("username").addEventListener("input", function () {
  document.getElementById("error-message").innerText = "";
});

document.getElementById("password").addEventListener("input", function () {
  document.getElementById("error-message").innerText = "";
});
