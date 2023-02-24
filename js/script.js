const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

// FDATOS
var direccion = urlParams.get('direccion');
var cif = urlParams.get('cif');

document.getElementById("direccion").innerHTML = direccion;
document.getElementById("cif").innerHTML = cif;

// FFACUTURAS
var numero = urlParams.get('numero');
var fecha = urlParams.get('fecha');

document.getElementById("numero").innerHTML = numero;
document.getElementById("fecha").innerHTML = fecha;