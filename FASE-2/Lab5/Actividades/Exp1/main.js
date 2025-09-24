// JS para evitar el envío del formulario en la demo
document.querySelector('#contacto')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado (demo).'); // quítalo si no lo necesitas
});
