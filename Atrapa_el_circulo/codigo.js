const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

let score = 0;
let circle = {
  x: 100,
  y: 100,
  radius: 30,
  color: "red"
};

// Dibuja el círculo actual
function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

// Genera nueva posición y color aleatorio
function moveCircle() {
  const margin = 40;
  circle.x = Math.random() * (canvas.width - margin * 2) + margin;
  circle.y = Math.random() * (canvas.height - margin * 2) + margin;
  circle.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
  drawCircle();
}

// Detecta clics
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  const dist = Math.sqrt((clickX - circle.x) ** 2 + (clickY - circle.y) ** 2);

  if (dist <= circle.radius) {
    score++;
    scoreDisplay.textContent = score;
    moveCircle();
  }
});

// Iniciar
moveCircle();
