const filtroEstadoEnfermedad = document.getElementById("txt-estado-enfermedad");
const filtroNombre = document.getElementById("txt-nombre-enfermedad");
const cuerpoTabla = document.querySelector("#tbl-enfermedades tbody");
const botonLimpiarF = document.querySelector("#btn-limpiar-filtro");

let listaEnfermedades = [];


const cargarLista = async() => {
    listaEnfermedades = await obtenerDatos("/obtener-enfermedades");
    mostrarEnfermedades();

};

const mostrarEnfermedades = () => {
    cuerpoTabla.innerHTML = "";

    const copiaLista = [...listaEnfermedades]
    const listaFiltrada = copiaLista.filter((enfermedad) => {
        if (filtroEstadoEnfermedad.value == "") {
            return true;
        }
        return filtroEstadoEnfermedad.value.toLowerCase() == enfermedad.estado.toLowerCase()
    }).filter((enfermedad) => {
        if (filtroNombre.value == "") {
            return true;
        }
        console.log(enfermedad)
        return filtroNombre.value.toLowerCase() == enfermedad.nombre.toLowerCase() || enfermedad.nombre.toLowerCase().includes(filtroNombre.value.toLowerCase())
    })

    listaFiltrada.forEach(enfermedad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = enfermedad.nombre;
        fila.insertCell().innerText = enfermedad.descripcion;
        fila.insertCell().innerText = enfermedad.estado;
        fila.insertCell().innerText = enfermedad.medicamento;
    });
};

cargarLista();

filtroEstadoEnfermedad.addEventListener("change", mostrarEnfermedades);
filtroNombre.addEventListener("change", mostrarEnfermedades);
botonLimpiarF.addEventListener("click", () => {
    filtroEstadoEnfermedad.value = "";
    filtroNombre.value = "";
    mostrarEnfermedades();

});