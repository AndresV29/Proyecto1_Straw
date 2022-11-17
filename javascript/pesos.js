const txtFecha = document.getElementById("txt-fecha-registro");
const txtPeso = document.getElementById("txt-peso-registro");
const btnRegistrarPeso = document.getElementById("btn-registrar-peso");
const tblHistorial = document.querySelector("#tbl-pesos tbody");
let historial = {};

const imprimirTabla = () => {
    let fila = tblHistorial.insertRow();
    fila.insertCell().innerText = historial.fecha;
    fila.insertCell().innerText = historial.peso;
};

const validarPesos = () => {
    let error = false;

    if (txtFecha.value == "") {
        error = true;
        txtFecha.classList.add("vacio");
    } else {
        txtFecha.classList.remove("vacio");
    }

    if (txtPeso.value == "") {
        error = true;
        txtPeso.classList.add("vacio");
    } else {
        txtPeso.classList.remove("vacio");
    }

    if (error == false) {
        historial.fecha = txtFecha.value;
        historial.peso = txtPeso.value;
        imprimirTabla();
    } else {
        console.log("Por favor rellene los campos resaltados en rojo");
    }
};

btnRegistrarPeso.addEventListener("click", validarPesos);