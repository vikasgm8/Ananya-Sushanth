
const loginScreen = document.getElementById("loginScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const flowerLayer = document.getElementById("flowerLayer");

document.getElementById("unlockButton").addEventListener("click", unlock);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    unlock();
  }
});

function unlock() {
  if (passwordInput.value.trim() !== "vikas") {
    message.textContent = "Oops! That's not the password. Try again 🤎";
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  message.textContent = "A little magic is waiting for you...";

  document.getElementById("unlockButton").disabled = true;
  passwordInput.disabled = true;

  createFlowers();

  setTimeout(function() {
    loginScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
  }, 2500);
}

function createFlowers() {
  const flowers = ["🌸", "🌷", "🌼", "🌺", "🤎"];

  for (let i = 0; i < 55; i++) {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration =
      (3 + Math.random() * 4) + "s";
    petal.style.animationDelay =
      Math.random() * 2 + "s";
    petal.style.fontSize =
      (16 + Math.random() * 18) + "px";

    flowerLayer.appendChild(petal);

    setTimeout(function() {
      petal.remove();
    }, 8500);
  }
}

document.getElementById("enterButton").addEventListener("click", function() {
  alert("Your beautiful story is about to begin... 🤎");
});
