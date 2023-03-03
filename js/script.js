const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
// FDATOS
var direccion = urlParams.get('direccion');
var cif = urlParams.get('cif');
var email = urlParams.get('email');
var telefono = urlParams.get('telefono');

document.getElementById("direccion").innerHTML = direccion.replaceAll("_", " ");
document.getElementById("cif").innerHTML = cif;
document.getElementById("email").innerHTML = email;
document.getElementById("telefono").innerHTML = telefono;

// FCONSIGNATARIO
var nombreConsig = urlParams.get('nombreConsig');
var direccionConsig = urlParams.get('direccionConsig');
var provinciaConsig = urlParams.get('provinciaConsig');
var cifConsig = urlParams.get('cifConsig');

document.getElementById("nombreConsig").innerHTML = nombreConsig.replaceAll("_", " ");
document.getElementById("direccionConsig").innerHTML = direccionConsig.replaceAll("_", " ");
document.getElementById("provinciaConsig").innerHTML = provinciaConsig.replaceAll("_", " ");
document.getElementById("cifConsig").innerHTML = cifConsig;

// FFACUTURAS
var numero = urlParams.get('numero');
var fecha = urlParams.get('fecha');

document.getElementById("numero").innerHTML = numero;
document.getElementById("fecha").innerHTML = fecha;

// FDETALLE
var dets = parseInt(urlParams.get('dets'));
var imp_total = 0.0;

for(i = 0; i < parseInt(dets); i++){
    var detalles = document.getElementById("detalles");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");

    var det_desc = urlParams.get('det_name' + i);
    var det_imp  = urlParams.get('det_imp'  + i); 

    p1.innerHTML = det_desc.replace("_", " ");
    p2.innerHTML = "1";
    p3.innerHTML = "Unidad";
    p4.innerHTML = det_imp + " €";
    p5.innerHTML = "IVA";
    p6.innerHTML = "Importe €";

    detalles.appendChild(p1);
    detalles.appendChild(p2);
    detalles.appendChild(p3);
    detalles.appendChild(p4);
    detalles.appendChild(p5);
    detalles.appendChild(p6);

    imp_total = parseFloat(imp_total) + parseFloat(det_imp.replaceAll(",", "."));
}

// IVA
var iva = 0 // Mandar parametro para el iva
document.getElementById("IVA").innerHTML = iva;


// TOTALES
document.getElementById("subtotal_sinIVA").innerHTML = imp_total.toFixed(2).toString().replaceAll(".", ",") + " €";

if (iva != 0) {
    imp_total = imp_total + (imp_total * iva) / 100
}

document.getElementById("importePagar").innerHTML = imp_total.toFixed(2).toString().replaceAll(".", ",") + " €";