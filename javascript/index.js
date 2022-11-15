const btnRegistrar = document.getElementById("btn-registrar");
const btnRegistrarPeso = document.getElementById("btn-registrar-peso");
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
    if (registroPeso == "") {
        txtPeso.classList.add("vacio");
    } else {
        txtPeso.classList.remove("vacio");
    }
    if (registroFecha == "") {
        txtFechaRegistro.classList.add("vacio");
    } else {
        txtFechaRegistro.classList.remove("vacio");
    }
};

validarPesos = () => {
    const txtPeso = document.getElementById("txt-peso-registro");
    const txtFechaRegistro = document.getElementById("txt-fecha-registro");
    let registroPeso = txtPeso.value;
    let registroFecha = txtFechaRegistro.value;
    if (registroPeso == "") {
        txtPeso.classList.add("vacio");
    } else {
        txtPeso.classList.remove("vacio");
    }
    if (registroFecha == "") {
        txtFechaRegistro.classList.add("vacio");
    } else {
        txtFechaRegistro.classList.remove("vacio");
    }
};
btnRegistrar.addEventListener("click", validar);
btnRegistrarPeso.addEventListener("click", validarPesos);