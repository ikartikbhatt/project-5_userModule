document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const payload = {
    userEmail: document.getElementById("userEmail").value,
    userPassword: document.getElementById("userPassword").value,
  };

  const res = await fetch("http://localhost:5000/user/userlogin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  showAlert(data.message);
  if (data.status === "success") {
    // localStorage.setItem("userEmail", payload.userEmail);
    setTimeout(() => location.href = "dashboard.html", 1000);
  }
});

function togglePassword() {
  const passwordInput = document.getElementById("userPassword");
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
}

function showAlert(msg) {
  const alertBox = document.createElement("div");
  alertBox.className = "alert";
  alertBox.innerText = msg;
  document.querySelector(".container").appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 2000);
}