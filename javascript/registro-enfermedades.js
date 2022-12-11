// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades

const btnAgregarEnfermedad = document.getElementById("btn-agregar-enfermedad");
const txtNombreEnfermedad = document.getElementById("txt-nombre-enfermedad");
const txtDescripcionEnfermedad = document.getElementById("txt-descripcion-enfermedad");
const txtEstadoEnfermedad = document.getElementById("txt-estado-enfermedad");
const txtMedicamentos = document.getElementById("txt-medicamento");
let enfermedad = {};



validarEnfermedades = () => {
    let nombreEnfermedad = txtNombreEnfermedad.value;
    let descripcionEnfermedad = txtDescripcionEnfermedad.value;
    let estadoEnfermedad = txtEstadoEnfermedad.value;
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
    if (error == false) {
        enfermedad.nombreEnfermedad = txtNombreEnfermedad.value;
        enfermedad.descripcionEnfermedad = txtDescripcionEnfermedad.value;
        enfermedad.estadoEnfermedad = txtEstadoEnfermedad.value;
        enfermedad.medicamentos = txtMedicamentos.value;
        registrarDatos(enfermedad, "/registrar-enfermedad", "mis-enfermedades.html");
    } else {
        swal.fire({
            "icon": "error",
            "title": "No se ha registrado la enfermedad",
            "text": "Revise los campos resaltados"
        })
    };

};

btnAgregarEnfermedad.addEventListener("click", validarEnfermedades);