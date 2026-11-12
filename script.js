
function unlock() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === "vikas") {
    message.textContent = "Opening your little world... 🤎";

    document.getElementById("loginScreen").classList.add("hidden");

    const layer = document.getElementById("flowerLayer");
    const flowers = ["🌸", "🌷", "🌼", "🤎", "🌺"];

    for (let i = 0; i < 45; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = flowers[
        Math.floor(Math.random() * flowers.length)
      ];

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = (3 + Math.random() * 4) + "s";
      petal.style.animationDelay = Math.random() * 2 + "s";
      petal.style.fontSize = (15 + Math.random() * 18) + "px";

      layer.appendChild(petal);

      setTimeout(() => petal.remove(), 8000);
    }

    setTimeout(() => {
      document.getElementById("welcomeScreen").classList.remove("hidden");
    }, 1800);

  } else {
    message.textContent = "Oops! Try the secret password again 💌";
  }
}

function enterStory() {
  alert("Our beautiful story begins here... 🤎");
}

document.getElementById("password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    unlock();
  }
});

