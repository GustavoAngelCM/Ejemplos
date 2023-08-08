let canvas = document.getElementById("animation");
let contexto = canvas.getContext("2d");

let x = 50;
let y = 450;
let bajar = false;

function dibujarSol(x, y) {
  contexto.beginPath();
  contexto.arc(x, y, 25, 0, 2 * Math.PI);
  contexto.strokeStyle = "orange";
  contexto.fillStyle = "yellow";
  contexto.fill();
  contexto.closePath();
  contexto.stroke();
}

function borrarContexto() {
  contexto.clearRect(0, 0, canvas.width, canvas.height);
}

function animacionDeSol () {
  borrarContexto();
  dibujarSol(x, y);
  if (y === 25) {
    bajar = true;
  }
  if (y === 451) {
    bajar = false;
  }
  if (x > 950) {
    x = 50;
    bajar = false;
  }
  x = x + 5;
  y = bajar ? y + 5 : y - 5;
}

setInterval(animacionDeSol, 1000/60);