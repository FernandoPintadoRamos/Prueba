const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

var numero = urlParams.get('numero');
var fecha = urlParams.get('fecha');

document.getElementById("numero").innerHTML = numero;
document.getElementById("fecha").innerHTML = fecha;