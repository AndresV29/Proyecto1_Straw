const btnIniciar = document.getElementById("btn-iniciar");
const txtPlan = document.getElementById("txt-plan");
const txtInicio = document.getElementById("txt-inicio");
const txtFinalizacion = document.getElementById("txt-finalizacion");
const filtroTipoPlan = document.getElementById("filtro-plan");
const botonLimpiarF = document.querySelector("#btn-limpiar-filtro");

const cuerpoTabla = document.querySelector("#tbl-ayunos tbody");

let listaAyunos = [];
let ayuno = {};

const cargarLista = async() => {
    listaAyunos = await obtenerDatos("/obtener-ayunos");
    mostrarAyunos();

};

const mostrarAyunos = () => {
    cuerpoTabla.innerHTML = "";

    const copiaLista = [...listaAyunos]
    const listaFiltrada = copiaLista.filter((ayuno) => {
        if (filtroTipoPlan.value == "") {
            return true;
        }
        return filtroTipoPlan.value.toLowerCase() == ayuno.plan.toLowerCase()
    })

    listaFiltrada.forEach(ayuno => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = ayuno.plan;
        fila.insertCell().innerText = ayuno.inicio;
        fila.insertCell().innerText = ayuno.finalizacion;
    });
};

cargarLista();

const validar = () => {
    let plan = txtPlan.value;
    let inicio = txtInicio.value;
    let finalizacion = txtFinalizacion.value;
    let error = false;

    if (plan == "") {
        error = true;
        txtPlan.classList.add("vacio");
    } else {
        txtPlan.classList.remove("vacio");
    }
    if (inicio == "") {
        error = true;
        txtInicio.classList.add("vacio");
    } else {
        txtInicio.classList.remove("vacio");
    }
    if (finalizacion == "") {
        error = true;
        txtFinalizacion.classList.add("vacio");
    } else {
        txtFinalizacion.classList.remove("vacio");
    }

    if (error == false) {
        ayuno.inicio = txtInicio.value;
        ayuno.finalizacion = txtFinalizacion.value;
        ayuno.plan = txtPlan.value;
        Swal.fire({
            'icon': 'success',
            'title': '',
            'text': 'Ayuno registrado exitosamente'
        });
        registrarDatos(ayuno, "/registrar-ayuno", "ayuno.html");

    } else {
        swal.fire({
            "icon": "error",
            "text": "Complete los campos resaltados para continuar con el registro"
        })
    };
};

btnIniciar.addEventListener("click", validar);

filtroTipoPlan.addEventListener("change", mostrarAyunos);
botonLimpiarF.addEventListener("click", () => {
    filtroTipoPlan.value = "";

    mostrarAyunos();

});