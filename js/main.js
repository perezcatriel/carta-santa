function enviar() {
	const $nombre = document.querySelector("#nombre");
	const nombre = $nombre.value;
	const  nombreValido= /^([a-z]{2,5})$/i.test(nombre);

if (nombreValido) {
  console.info('Bienvenido');
  $nombre.style.border = '1px solid green';
} else {
  console.error('Ingrese un nombre valido');
  $nombre.style.border = '1px solid red';
}
}
