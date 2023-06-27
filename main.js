function validateFullName() {
  const fullName = document.getElementById("fullName").value;
  const errorElement = document.getElementById("fullNameError");

  if (fullName.length < 5) {
    errorElement.textContent = "Full Name must have at least 5 characters";
  } else {
    errorElement.textContent = "";
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const errorElement = document.getElementById("emailError");

  if (!email.includes("@")) {
    errorElement.textContent = "Enter a valid Email ID";
  } else {
    errorElement.textContent = "";
  }
}

function validatePhoneNumber() {
  const phone = document.getElementById("phone").value;
  const errorElement = document.getElementById("phoneError");

  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    errorElement.textContent = "Enter a valid 10-digit Phone Number";
  } else {
    errorElement.textContent = "";
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;
  const errorElement = document.getElementById("passwordError");

  if (
    password.length < 8 ||
    password === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {
    errorElement.textContent = "Password is not strong enough";
  } else {
    errorElement.textContent = "";
  }
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorElement = document.getElementById("confirmPasswordError");

  if (password !== confirmPassword) {
    errorElement.textContent = "Passwords do not match";
  } else {
    errorElement.textContent = "";
  }
}
