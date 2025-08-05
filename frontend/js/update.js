document.getElementById("updateForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userEmail = localStorage.getItem("userEmail");

  const form = e.target;
  const userName = form.userName.value.trim();
  const name = form.name.value.trim();
  const mobile = form.mobile.value.trim();
  const age = form.age.value.trim();
  const bio = form.bio.value.trim();
  const address = form.address.value.trim();
  const country = form.country.value.trim();
  const state = form.state.value.trim();
  const city = form.city.value.trim();
  const pincode = form.pincode.value.trim();

  if (!userName) {
    alert("Username cannot be empty");
    return;
  }

  const payload = {
    userEmail,
    userName,
    name,
    mobile,
    age,
    bio,
    address,
    country,
    state,
    city,
    pincode,
  };

  try {
    const res = await fetch("http://localhost:5000/user/updateUserDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    console.error("Update failed:", error);
    alert("Update failed. Please try again.");
  }
});