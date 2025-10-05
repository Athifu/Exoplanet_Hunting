function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  if (email && password) {
    // You can add authentication logic here later
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter valid credentials.");
  }
}
