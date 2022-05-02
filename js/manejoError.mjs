export function manejarErrores() {
	const $errores = document.querySelectorAll(".error-mensaje");

	if ($errores.length) {
		for (let i = 0; i < $errores.length; i++) {
			$errores[i].remove();
		}
	}

	validarNombre();
	validarProvincia();
	validarDescripcion();
}

function validarNombre() {
	
	const $error = document.querySelector("#errores");
	const $nombre = document.querySelector("#nombre");
	const nombre = $nombre.value;
	const nombreValido = /^([a-z]{2,10})$/i.test(nombre);

	const $contenedorError = document.createElement("div");
	$contenedorError.className = "error-mensaje";

	if (!nombreValido) {
		let $mensajeError = "Ingrese un nombre valido";

		$contenedorError.append($mensajeError);
		$error.append($contenedorError);
		$nombre.style.border = "3px solid red";
	} else {
		$nombre.style.border = "1px solid green";
	}
}

function validarProvincia() {
	const $error = document.querySelector("#errores");
	const $ciudad = document.querySelector("select");

	const $contenedorError = document.createElement("div");
	$contenedorError.className = "error-mensaje";

	if ($ciudad.value === "") {
		const $mensajeError = "Ingrese una ciudad valida";

		$contenedorError.append($mensajeError);
		$error.append($contenedorError);
		$ciudad.style.border = "3px solid red";
	} else {
		$ciudad.style.border = "1px solid green";
	}
}

function validarDescripcion() {
	const $error = document.querySelector("#errores");
	const $descripcion = document.querySelector("textarea");

	const $contenedorError = document.createElement("div");
	$contenedorError.className = "error-mensaje";

	if ($descripcion.value === "") {
		const $mensajeError = "Ingrese una descripcion valida";

		$contenedorError.append($mensajeError);
		$error.append($contenedorError);
		$descripcion.style.border = "3px solid red";
	} else {
		$descripcion.style.border = "1px solid green";
	}
}

function submit() {
	const nombre = document.querySelector("#nombre");
	const ciudad = document.querySelector("select");
	const descripcion = document.querySelector("textarea");

	if (
		nombre.style.border === "1px solid green" &&
		ciudad.style.border === "1px solid green" &&
		descripcion.style.border === "1px solid green"
	) {
		setTimeout(() => {
			const exito = document.querySelector("#exito");
			const formulario = document.querySelector("#carta-a-santa");

			exito.className = "";
			formulario.className = "oculto";
		}, 1000);

		setTimeout(()=>{
			window.location = 'resultado.html';
		},2000)
	}
}
