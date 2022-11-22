const hInicio = document.getElementById("h-inicio");
const hFinal = document.getElementById("h-final");
const nombre = document.getElementById("nombre");
const peso = document.getElementById("peso");
const imc = document.getElementById("imc");
const btnRegistro = document.getElementById("registro")

let todoBien = false;

function validaHoraInicio() {
    if (hInicio.value === "") {
        todoBien = false;
        hInicio.classList.add("vacio");
    } else {
        todoBien = true;
        hInicio.classList.remove("vacio");
    }
}

function validaHoraFinal() {
    if (hFinal.value === "") {
        todoBien = false;
        hFinal.classList.add("vacio");
    } else {
        todoBien = true;
        hFinal.classList.remove("vacio");
    }
}

function validaNombre() {
    if (nombre.value === "") {
        todoBien = false;
        nombre.classList.add("vacio");
    } else {
        todoBien = true;
        nombre.classList.remove("vacio");
    }
}

function validaPeso() {
    if (peso.value === "") {
        todoBien = false;
        peso.classList.add("vacio");
    } else {
        todoBien = true;
        peso.classList.remove("vacio");
    }
}

function validaIMC() {
    if (imc.value === "") {
        todoBien = false;
        imc.classList.add("vacio");
    } else {
        todoBien = true;
        imc.classList.remove("vacio");
    }
}

function validaInfo() {
    validaHoraInicio();
    validaHoraFinal();
    validaNombre();
    validaPeso();
    validaIMC();
    if (todoBien) {
        //aqui deberia hacer la insercion en la base de datos con los datos que trae con getElementByID
        alert("esta alarma sonara siempre que todo este bien")
        limpiaTabla();
    }
}

function limpiaTabla() {
    hInicio.value = "";
    hFinal.value = "";
    peso.value = "";
    imc.value = "";
    nombre.value = "";
}

btnRegistro.addEventListener('click', Event => {
    validaInfo();
});