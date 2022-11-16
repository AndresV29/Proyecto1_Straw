const btnRegistrar = document.getElementById("btn-registrar");
const tblLogros = document.querySelector("#tbl-logro tbody");
let logro = {};
const imprimirTabla = () => {
    let fila = tblLogros.insertRow();
    fila.insertCell().innerText = logro.objetivo;
    fila.insertCell().innerText = logro.obj;
    fila.insertCell().innerText = logro.horas;
    fila.insertCell().innerText = logro.peso;
    fila.insertCell().innerText = logro.imc;
    fila.insertCell().innerText = logro.dificultad;
};

const validar = () => {
    let error = false;
    const txtObjetivo = document.getElementById("txt-objetivo");
    const txtObj = document.getElementById("txt-obj");
    const txtHoras = document.getElementById("txt-horas");
    const txtPesoMeta = document.getElementById("txt-pesometa");
    const txtImc = document.getElementById("txt-imc");
    const txtDificultad = document.getElementById("txt-dificultad");

    let objetivo = txtObjetivo.value;
    let obj = txtObj.value;
    let horas = txtHoras.value;
    let pesoMeta = txtPesoMeta.value;
    let imc = txtImc.value;
    let dificultad = txtDificultad.value;

    if (txtObjetivo.value == "") {
        error = true;
        txtObjetivo.classList.add("vacio");
    } else {
        txtObjetivo.classList.remove("vacio");
    }

    if (txtObj.value == "") {
        error = true;
        txtObj.classList.add("vacio");
    } else {
        txtObj.classList.remove("vacio");
    }

    if (txtHoras.value == "") {
        error = true;
        txtHoras.classList.add("vacio");
    } else {
        txtHoras.classList.remove("vacio");
    }

    if (txtPesoMeta.value == "") {
        error = true;
        txtPesoMeta.classList.add("vacio");
    } else {
        txtPesoMeta.classList.remove("vacio");
    }

    if (txtImc.value == "") {
        error = true;
        txtImc.classList.add("vacio");
    } else {
        txtImc.classList.remove("vacio");
    }

    if (txtDificultad.value == "") {
        error = true;
        txtDificultad.classList.add("vacio");
    } else {
        txtDificultad.classList.remove("vacio");
    }

    if (error == false) {
        logro.objetivo = txtObjetivo.value;
        logro.obj = txtObj.value;
        logro.horas = txtHoras.value;
        logro.peso = txtPesoMeta.value;
        logro.imc = txtImc.value;
        logro.dificultad = txtDificultad.value;
        logro.icono = txtIcono.value;
        imprimirTabla();
    } else {
        console.log("Por favor rellene los espacios en blanco");
    }
};

btnRegistrar.addEventListener("click", validar);