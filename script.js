
function unlock() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === "vikas") {
    message.textContent = "Welcome to our golden world 🤎";
    message.style.color = "#8b633b";
  } else {
    message.textContent = "Oops! That's not the right password 💌";
    message.style.color = "#b44b42";
  }
}
