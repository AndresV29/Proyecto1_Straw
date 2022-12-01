const txtNombre = document.getElementById("txt-nombre");
const txtFechaNacimiento = document.getElementById("txt-fecha-nac");
const txtEstatura = document.getElementById("txt-estatura");
const txtGenero = document.getElementById("txt-genero");
const txtCorreo = document.getElementById("txt-correo");
const txtFoto = document.getElementById("txt-foto");
const txtPesoMeta = document.getElementById("txt-peso-meta");
const btnRegistrar = document.getElementById("btn-registrar");
let registro = {};

const validar = () => {
    let error = false;
    if (txtNombre.value == "") {
        error = true;
        txtNombre.classList.add("vacio");
    } else {
        txtNombre.classList.remove("vacio");
    }
    if (txtFechaNacimiento.value == "") {
        error = true;
        txtFechaNacimiento.classList.add("vacio");
    } else {
        txtFechaNacimiento.classList.remove("vacio");
    }

    if (txtEstatura.value == "") {
        error = true;
        txtEstatura.classList.add("vacio");
    } else {
        txtEstatura.classList.remove("vacio");
    }

    if (txtGenero.value == "") {
        error = true;
        txtGenero.classList.add("vacio");
    } else {
        txtGenero.classList.remove("vacio");
    }

    if (txtCorreo.value == "") {
        error = true;
        txtCorreo.classList.add("vacio");
    } else {
        txtCorreo.classList.remove("vacio");
    }

    if (txtFoto.value == "") {
        error = true;
        txtFoto.classList.add("vacio");
    } else {
        txtFoto.classList.remove("vacio");
    }

    if (txtPesoMeta.value == "") {
        error = true;
        txtPesoMeta.classList.add("vacio");
    } else {
        txtPesoMeta.classList.remove("vacio");
    }

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': '',
            'text': 'Favor rellene los campos resaltados'
        });
    } else {
        let usuario = {
            nombre: txtNombre.value,
            nacimiento: txtFechaNacimiento.value,
            estatura: txtEstatura.value,
            genero: txtGenero.value,
            correo: txtCorreo.value,
            foto: '',
            pesoMeta: txtPesoMeta.value
        };
        registrarDatos(usuario, '/registro-usuario');
    }
};
btnRegistrar.addEventListener('click', validar);