function mostrarSusto() {
  // Muestra el susto
  const imagen = document.querySelector(".susto");
  imagen.style.display = "block";

  // Oculta el susto después de 5 segundos
  setTimeout(() => {
    imagen.style.display = "none";

    // Reinicia el temporizador
    clearInterval(temporizador);
    temporizador = setInterval(mostrarSusto, 5000);
  }, 1000);
}
// Establece el temporizador por primera vez
let temporizador = setInterval(mostrarSusto, 5000);
