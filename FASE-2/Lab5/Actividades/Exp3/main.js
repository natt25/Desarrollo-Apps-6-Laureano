// Obtén el elemento del dropdown (el <a> con data-bs-toggle="dropdown")
const dropToggle = document.getElementById('navDrop');
if (dropToggle) {
  const dropdown = new bootstrap.Dropdown(dropToggle);

  // Eventos de ciclo de vida del dropdown de Bootstrap
  dropToggle.addEventListener('show.bs.dropdown', () => {
    console.log('Dropdown → show.bs.dropdown');
  });

  dropToggle.addEventListener('shown.bs.dropdown', () => {
    console.log('Dropdown → shown.bs.dropdown');
  });

  dropToggle.addEventListener('hide.bs.dropdown', () => {
    console.log('Dropdown → hide.bs.dropdown');
  });

  dropToggle.addEventListener('hidden.bs.dropdown', () => {
    console.log('Dropdown → hidden.bs.dropdown');
  });

  // Ejemplo: cerrar programáticamente después de 6s si está abierto
  document.addEventListener('shown.bs.dropdown', (ev) => {
    if (ev.target === dropToggle) {
      setTimeout(() => dropdown.hide(), 6000);
    }
  });
}
