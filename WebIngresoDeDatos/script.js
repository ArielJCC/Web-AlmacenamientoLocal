// Función para validar el formulario y almacenar datos localmente
function validarFormulario() {
  var regexNombre = /^[a-zA-ZñÑ ]{1,30}$/;
  var regexApellido = /^[a-zA-ZñÑ ]{1,30}$/;
  var regexCedula = /^\d{10}(?:-\d{1,2})?$/;
  var regexDireccion = /^[a-zA-Z0-9ñÑ ]{1,50}$/;
  var regexTelefono = /^\d{1,10}$/;

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var cedula = document.getElementById('cedula').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
  var genero = document.getElementById('genero').value;

  if (!regexNombre.test(nombre)) {
    alert('Por favor ingrese nombres válidos(máximo 30 carácteres).');
    return false;
  }

  if (!regexNombre.test(apellido)) {
    alert('Por favor ingrese apellidos válido(máximo 30 carácteres).');
    return false;
  }

  if (!regexCedula.test(cedula)) {
    alert('Por favor ingrese un número de cédula válido (exactamente 10 números.)');
    return false;
  }

  if (!regexDireccion.test(direccion)) {
    alert('Por favor ingrese una dirección válida (máximo 50 carácteres).');
    return false;
  }

  if (!regexTelefono.test(telefono)) {
    alert('Por favor ingrese un número de teléfono válido (máximo 10 números).');
    return false;
  }

  // Almacenar los datos en localStorage
  var cliente = {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    direccion: direccion,
    telefono: telefono,
    email: email,
    fecha_nacimiento: fecha_nacimiento,
    genero: genero
  };

  // Convertir el objeto a una cadena JSON y almacenar en localStorage
  localStorage.setItem('cliente', JSON.stringify(cliente));

  // Mostrar mensaje de éxito
  alert('Datos guardados y formulario enviado exitosamente.');


  // Devolver true para permitir el envío del formulario
  return true;
}
