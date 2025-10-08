const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show success message for any input
  msg.textContent = "✅ Welcome successfully!";
  msg.classList.add("show", "success");

  // Remove the message after 2.5 seconds
  setTimeout(() => {
   window.location.href = "dashboard.html";
  }, 1500);

  // Optional: reset form
  form.reset();
});

// Example: Animate cards sequentially on load
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.3}s`;
});

