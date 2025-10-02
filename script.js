const giftBox = document.getElementById("giftBox");
const popup = document.getElementById("popup");
const popupCard = document.querySelector(".popup-card");
const noteText = document.getElementById("noteText");
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

const message = `Thank you for your guidance, patience, and endless support.
You’ve touched our lives in so many ways,
and today we celebrate the heart you put into teaching.
🌸 We appreciate you more than words can say. 🌸`;

giftBox.addEventListener("click", () => {
  giftBox.classList.add("open");
  popup.style.display = "block";
  startConfetti();
  typeMessage(message, noteText, 40);
});

// Typing effect
function typeMessage(msg, element, speed) {
  let i = 0;
  element.textContent = "";
  function typing() {
    if (i < msg.length) {
      element.textContent += msg.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Confetti
function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 10
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });
  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += c.d / 2;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}
