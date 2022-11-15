const btnRegistrar = document.getElementById("btn-registrar");
validar = () => {
    const txtNombre = document.getElementById("txt-nombre");
    const txtFechaNacimiento = document.getElementById("txt-fecha-nac");
    const txtEstatura = document.getElementById("txt-estatura");
    const txtGenero = document.getElementById("txt-genero");
    const txtCorreo = document.getElementById("txt-correo");
    const txtFoto = document.getElementById("txt-foto");
    const txtPesoMeta = document.getElementById("txt-peso-meta");
    let nombre = txtNombre.value;
    let fechaNacimiento = txtFechaNacimiento.value;
    let estatura = txtEstatura.value;
    let genero = txtGenero.value;
    let correo = txtCorreo.value;
    let foto = txtFoto.value;
    let pesoMeta = txtPesoMeta.value;
    if (nombre == "") {
        txtNombre.classList.add("vacio");
    } else {
        txtNombre.classList.remove("vacio");
    }
    if (fechaNacimiento == "") {
        txtFechaNacimiento.classList.add("vacio");
    } else {
        txtFechaNacimiento.classList.remove("vacio");
    }
    if (estatura == "") {
        txtEstatura.classList.add("vacio");
    } else {
        txtEstatura.classList.remove("vacio");
    }
    if (genero == "") {
        txtGenero.classList.add("vacio");
    } else {
        txtGenero.classList.remove("vacio");
    }
    if (correo == "") {
        txtCorreo.classList.add("vacio");
    } else {
        txtCorreo.classList.remove("vacio");
    }
    if (foto == "") {
        txtFoto.classList.add("vacio");
    } else {
        txtFoto.classList.remove("vacio");
    }
    if (pesoMeta == "") {
        txtPesoMeta.classList.add("vacio");
    } else {
        txtPesoMeta.classList.remove("vacio");
    }
};
btnRegistrar.addEventListener("click", validar);

/* Validacion registro pesos */

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