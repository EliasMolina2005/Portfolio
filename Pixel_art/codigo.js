const canvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');

let isPainting = false;

// Tamaño de la grilla
const rows = 16;
const cols = 16;

// Crear celdas
for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  canvas.appendChild(cell);

  // Pintar con clic
  cell.addEventListener('mousedown', () => {
    isPainting = true;
    cell.style.backgroundColor = colorPicker.value;
  });

  // Pintar al pasar mientras se mantiene el clic
  cell.addEventListener('mouseover', () => {
    if (isPainting) {
      cell.style.backgroundColor = colorPicker.value;
    }
  });

  // Detener pintura
  cell.addEventListener('mouseup', () => {
    isPainting = false;
  });
}

// Escuchar eventos globales de mouseup por si se suelta fuera del canvas
document.addEventListener('mouseup', () => {
  isPainting = false;
});

// Limpiar el tablero
clearBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = '#fff');
});
