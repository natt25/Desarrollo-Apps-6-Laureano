// Se carga cuando el navegador procesa el <script src="main.js">
console.log("¡Hola desde un archivo externo!");

// Asegurar que el DOM está disponible por si se coloca el script en <head> en algún momento
document.addEventListener("DOMContentLoaded", () => {
  const estado = document.getElementById("estado");
  const btn = document.getElementById("btnExterno");

  // Ejemplos de variables y constantes (coherentes con la guía)
  let clics = 0;
  const MENSAJE = "Evento desde archivo externo";

  btn.addEventListener("click", () => {
    clics++;
    alert(`${MENSAJE} (#${clics})`);
    estado.textContent = `Estado: hiciste clic (externo) — total: ${clics}`;
  });
});
