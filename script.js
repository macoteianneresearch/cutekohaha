const giftBox = document.getElementById("giftBox");
const lid = giftBox.querySelector(".lid");
const card = document.getElementById("card");
const cardMessage = document.getElementById("cardMessage");
const floatingText = document.querySelector(".floating-text");

// Fill background with lots of small texts
for (let i = 0; i < 120; i++) {
  const span = document.createElement("span");
  span.textContent = "Happy Teacher's Day! haha cute";
  floatingText.appendChild(span);
}

// Heartwarming note
let message = "Dear Teacher,\n\nThank you for your endless patience, wisdom, and care. You’ve shaped not just our minds, but also our hearts. We are so grateful for all the love and lessons you share with us every day.\n\nHappy Teacher’s Day! 💙";

let typingIndex = 0;

function typeMessage() {
  if (typingIndex < message.length) {
    cardMessage.innerHTML += message.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeMessage, 60); // slower typing for comfort
  }
}

giftBox.addEventListener("click", () => {
  lid.style.transform = "translateY(-100px) rotate(-20deg)";
  setTimeout(() => {
    card.style.display = "block";
    typeMessage();
    startConfetti();
  }, 600);
});

/* Confetti effect */
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];

function randomColor() {
  const colors = ["#3498db", "#1abc9c", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function ConfettiPiece(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 8 + 4;
  this.color = randomColor();
  this.speed = Math.random() * 3 + 2;
}

function startConfetti() {
  for (let i = 0; i < 300; i++) {
    confettiPieces.push(new ConfettiPiece(Math.random() * confettiCanvas.width, -10));
  }
  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((p) => {
    p.y += p.speed;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  requestAnimationFrame(updateConfetti);
}

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
