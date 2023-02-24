const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var nombre = urlParams.get('Nombre');
    document.getElementById("Nombre").innerHTML = nombre;