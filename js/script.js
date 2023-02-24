const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

var numero = urlParams.get('numero');
var fecha = urlParams.get('fecha');
var direccion = urlParams.get('direccion');

document.getElementById("numero").innerHTML = numero;
document.getElementById("fecha").innerHTML = fecha;
document.getElementById("direccion").innerHTML = direccion;