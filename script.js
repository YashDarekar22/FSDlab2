
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;

  if (!username || !email || !phone || !password || !confirmPassword) {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Invalid email format.";
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    errorMsg.textContent = "Phone number must be 10 digits.";
    return;
  }

  if (!passwordRegex.test(password)) {
    errorMsg.textContent = "Password must be at least 7 characters, include a capital letter, a digit, and a special character (&,$,#,@).";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Registration successful!";
});
