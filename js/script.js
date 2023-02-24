const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
// FDATOS
var direccion = urlParams.get('direccion');
var cif = urlParams.get('cif');
var email = urlParams.get('email');
var telefono = urlParams.get('telefono');

document.getElementById("direccion").innerHTML = direccion;
document.getElementById("cif").innerHTML = cif;
document.getElementById("email").innerHTML = email;
document.getElementById("telefono").innerHTML = telefono;

// FCONSIGNATARIO
var nombreConsig = urlParams.get('nombreConsig');
var direccionConsig = urlParams.get('direccionConsig');

document.getElementById("nombreConsig").innerHTML = nombreConsig;
document.getElementById("direccionConsig").innerHTML = direccionConsig;

// FFACUTURAS
var numero = urlParams.get('numero');
var fecha = urlParams.get('fecha');

document.getElementById("numero").innerHTML = numero;
document.getElementById("fecha").innerHTML = fecha;