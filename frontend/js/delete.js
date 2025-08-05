document.getElementById("deleteForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const payload = {
    userName: document.getElementById("userName").value
  };
  const res = await fetch("http://localhost:5000/user/userDelete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  alert(data.message);
  if (data.status === "success") location.href = "index.html";
});