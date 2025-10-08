const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show success message for any input
  msg.textContent = "✅ Welcome successfully!";
  msg.classList.add("show", "success");

  // Remove the message after 2.5 seconds
  setTimeout(() => {
    msg.classList.remove("show");
  }, 2500);

  // Optional: reset form
  form.reset();
});
