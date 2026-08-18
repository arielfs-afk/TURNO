const opciones = document.querySelectorAll('.opcion');
const botonVer = document.getElementById('botonVer');
const resultado = document.getElementById('resultado');

let algunaMarcada = false;

opciones.forEach((opcion) => {
  opcion.addEventListener('click', () => {
    opcion.classList.toggle('marcada');
    algunaMarcada = document.querySelectorAll('.opcion.marcada').length > 0;
    botonVer.disabled = !algunaMarcada;
  });
});

botonVer.addEventListener('click', () => {
  resultado.classList.add('visible');
  resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
