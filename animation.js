let canvas = document.getElementById("animation");
let contexto = canvas.getContext("2d");

let x = 0;
let y = 100;

function dibujarSol(x, y) {
  contexto.beginPath();
  contexto.arc(x, y, 50, 0, 2 * Math.PI);
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
  x = x + 7;
  if ( x > 975) {
    x = 0;
  }
}

setInterval(animacionDeSol, 1000/60);