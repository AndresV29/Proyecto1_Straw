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



// validacion recetas // validacion recetas // validacion recetas // validacion recetas // validacion recetas //

const btnAgregarReceta = document.getElementById("btn-agregar-receta");
const txtNombreReceta = document.getElementById("txt-nombre-receta");
const txtIngredientes = document.getElementById("txt-ingredientes");
const fileFotoReceta = document.getElementById("file-foto-receta");
const txtPasosReceta = document.getElementById("txt-pasos");
const txtTipoComida = document.getElementById("txt-tipo-comida");
const txtCategoriaReceta = document.getElementById("txt-categoria-receta");

validarRecetas = () => {
    let nombreReceta = txtNombreReceta.value;
    let ingredientes = txtIngredientes.value;
    let fotoReceta = fileFotoReceta.value;
    let pasosReceta = txtPasosReceta.value;
    let tipoComida = txtTipoComida.value;
    let categoriaComida = txtCategoriaReceta.value;

    if (nombreReceta == "") {
        txtNombreReceta.classList.add("vacio");
    } else {
        txtNombreReceta.classList.remove("vacio");
    }
    if (ingredientes == "") {
        txtIngredientes.classList.add("vacio");
    } else {
        txtIngredientes.classList.remove("vacio");
    }
    if (fotoReceta == "") {
        fileFotoReceta.classList.add("vacio");
    } else {
        fileFotoReceta.classList.remove("vacio");
    }
    if (pasosReceta == "") {
        txtPasosReceta.classList.add("vacio");
    } else {
        txtPasosReceta.classList.remove("vacio");
    }
    if (tipoComida == "") {
        txtTipoComida.classList.add("vacio");
    } else {
        txtTipoComida.classList.remove("vacio");
    }
    if (categoriaComida == "") {
        txtCategoriaReceta.classList.add("vacio");
    } else {
        txtCategoriaReceta.classList.remove("vacio");
    }

};
btnAgregarReceta.addEventListener("click", validarRecetas);

// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades

const btnAgregarEnfermedad = document.getElementById("btn-agregar-enfermedad");
const txtNombreEnfermedad = document.getElementById("txt-nombre-enfermedad");
const txtDescripcionEnfermedad = document.getElementById("txt-descripcion-enfermedad");
const txtEstadoEnfermedad = document.getElementById("txt-estado-enfermedad");
const txtMedicamentos = document.getElementById("txt-medicamento");
const tblEnfermedades = document.querySelector("#tbl-enfermedades");
let enfermedad = {};

const imprimirTablaEnfermedades = () => {
    let fila = tblEnfermedades.insertRow();
    fila.insertCell().innerText = enfermedad.nombreEnfermedad;
    fila.insertCell().innerText = enfermedad.descripcionEnfermedad;
    fila.insertCell().innerText = enfermedad.estadoEnfermedad;
    fila.insertCell().innerText = enfermedad.medicamentos;

    let celdaClasif = fila.insertCell();
    celdaClasif.innerText = clasificacion;
    celdaClasif.classList.add(clasificacion);

};
validarEnfermedades = () => {
    let nombreEnfermedad = txtNombreEnfermedad.value;
    let descripcionEnfermedad = txtDescripcionEnfermedad.value;
    let estadoEnfermedad = txtEstadoEnfermedad.value;
    let medicamentos = txtMedicamentos.value;
    let error = false;

    if (nombreEnfermedad == "") {
        error = true;
        txtNombreEnfermedad.classList.add("vacio");
    } else {
        txtNombreEnfermedad.classList.remove("vacio");
    }
    if (descripcionEnfermedad == "") {
        error = true;
        txtDescripcionEnfermedad.classList.add("vacio");
    } else {
        txtDescripcionEnfermedad.classList.remove("vacio");
    }
    if (estadoEnfermedad == "") {
        error = true;
        txtEstadoEnfermedad.classList.add("vacio");
    } else {
        txtEstadoEnfermedad.classList.remove("vacio");
    }
    if (medicamentos == "") {
        error = true;
        txtMedicamentos.classList.add("vacio");
    } else {
        txtMedicamentos.classList.remove("vacio");
    }
    if (error == false) {
        enfermedad.nombreEnfermedad = txtNombreEnfermedad.value;
        enfermedad.descripcionEnfermedad = txtDescripcionEnfermedad.value;
        enfermedad.estadoEnfermedad = txtEstadoEnfermedad.value;
        enfermedad.medicamentos = txtMedicamentos.value;
        imprimirTablaEnfermedades();
    } else {
        console.log("Por favor complete los campos resaltados");
    }
};

btnAgregarEnfermedad.addEventListener("click", validarEnfermedades);