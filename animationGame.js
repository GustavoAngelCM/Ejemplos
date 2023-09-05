const canvas = document.getElementById('animation');
const ctx = canvas.getContext('2d');
const ancho = 20;
const alto = 20;
const velocidad = 2;
const yPosicion = 250;
let rectangulos = [];

// Función para generar un rectángulo aleatorio en X=0
function generarRectangulosAleatorios() {
    const color = obtenerColorAleatorio();
    rectangulos.push({ x: 0, y: yPosicion, color });
}

// Función para obtener un color aleatorio en formato RGB
function obtenerColorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Función para animar los rectángulos
function animateRectangulos() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rectangulos.forEach(rectangle => {
        ctx.fillStyle = rectangle.color;
        //Math.floor(Math.random()* (70 - 20) + 20)
        ctx.fillRect(rectangle.x, rectangle.y, ancho, alto);

        // Mover el rectángulo hacia la derecha
        rectangle.x += velocidad;

        // Si el rectángulo sale del canvas, eliminarlo
        if (rectangle.x > canvas.width) {
            const index = rectangulos.indexOf(rectangle);
            rectangulos.splice(index, 1);
        }
    });

    // Generar un nuevo rectángulo aleatorio en X=0 cada segundo
    if (Math.random() < 1 / 60) {
        generarRectangulosAleatorios();
    }

    requestAnimationFrame(animateRectangulos);
}

// Iniciar la animación
animateRectangulos();