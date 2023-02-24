const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

var nombre = urlParams.get('Nombre');
var apellido = urlParams.get('Apellido');

document.getElementById("Nombre").innerHTML = nombre;
document.getElementById("Apellido").innerHTML = apellido;