// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades// validacion enfermedades

const btnAgregarEnfermedad = document.getElementById("btn-agregar-enfermedad");
const txtNombreEnfermedad = document.getElementById("txt-nombre-enfermedad");
const txtDescripcionEnfermedad = document.getElementById("txt-descripcion-enfermedad");
const txtEstadoEnfermedad = document.getElementById("txt-estado-enfermedad");
const txtMedicamentos = document.getElementById("txt-medicamento");
const tblEnfermedades = document.querySelector("#tbl-enfermedades");
let enfermedad = {};

// const imprimirTablaEnfermedades = () => {
//     let fila = tblEnfermedades.insertRow();
//     fila.insertCell().innerText = enfermedad.nombreEnfermedad;
//     fila.insertCell().innerText = enfermedad.descripcionEnfermedad;
//     fila.insertCell().innerText = enfermedad.estadoEnfermedad;
//     fila.insertCell().innerText = enfermedad.medicamentos;


// };

const cuerpoTabla = document.querySelector("#tbl-enfermedades tbody");
let listaEnfermedades = [];

const cargarLista = async() => {
    listaEnfermedades = await obtenerDatos("/obtener-enfermedades");
    mostrarEnfermedades();

};

const mostrarEnfermedades = () => {
    cuerpoTabla.innerHTML = "";
    listaEnfermedades.forEach(enfermedad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = enfermedad.nombreEnfermedad;
        fila.insertCell().innerText = enfermedad.descripcionEnfermedad;
        fila.insertCell().innerText = enfermedad.estadoEnfermedad;
        fila.insertCell().innerText = enfermedad.medicamentos;
    });
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
    if (error == false) {
        enfermedad.nombreEnfermedad = txtNombreEnfermedad.value;
        enfermedad.descripcionEnfermedad = txtDescripcionEnfermedad.value;
        enfermedad.estadoEnfermedad = txtEstadoEnfermedad.value;
        enfermedad.medicamentos = txtMedicamentos.value;
        // imprimirTablaEnfermedades();
    } else {
        swal.fire({
            "icon": "warning",
            "title": "No se ha registrado la enfermedad",
            "text": "Revise los campos resaltados"
        })
    };
    registrarDatos(enfermedad, "/registrar-enfermedad");
};

btnAgregarEnfermedad.addEventListener("click", validarEnfermedades);