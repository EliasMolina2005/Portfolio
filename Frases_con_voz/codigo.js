const frases = [
  "No pain, no gain",
  "El código que no compila, te enseña más que el que sí.",
  "Hoy es un gran día para romper tus límites.",
  "No sos débil, solo estás cargando fuerza.",
  "Push it to the limit",
  "El gym no perdona, pero recompensa.",
  "¿Fallaste? Genial, estás aprendiendo.",
  "La motivación te trae, la disciplina te queda.",
  "En la vida, como en JavaScript: todo tiene un scope.",
  "Dale campeón, que vos podés"
];

const fraseEl = document.getElementById("frase");
const btn = document.getElementById("btn");

function reproducirFrase(frase) {
  const utterance = new SpeechSynthesisUtterance(frase);
  utterance.lang = "es-AR";
  utterance.rate = 1; // velocidad
  speechSynthesis.speak(utterance);
}

btn.addEventListener("click", () => {
  const random = frases[Math.floor(Math.random() * frases.length)];
  fraseEl.textContent = random;
  reproducirFrase(random);
});


