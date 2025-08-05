document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const payload = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value,
    userPassword: document.getElementById("userPassword").value,
  };
  const res = await fetch("http://localhost:5000/user/userSignUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  alert(data.message);
  if (data.status === "success") location.href = "index.html";
});