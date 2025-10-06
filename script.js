const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;
  
  if(username === "" || password === "") {
    alert("Please fill all fields");
  } else {
    alert(`Logged in as ${username}`);
  }
});
