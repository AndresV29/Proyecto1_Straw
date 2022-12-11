const hInicio = document.getElementById("h-inicio");
const hFinal = document.getElementById("h-final");
const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipo");
const peso = document.getElementById("peso");
const imc = document.getElementById("imc");
const btnRegistro = document.getElementById("registro")

let error = false;
const cuerpoTabla = document.querySelector("#tbl-actividades tbody");
let listaActividades = [];

const cargarLista = async() => {
    listaActividades = await obtenerDatos("/obtener-actividades");
    mostrarActividades();

};

const mostrarActividades = () => {
    cuerpoTabla.innerHTML = "";
    listaActividades.forEach(actividad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = actividad.horaInicial
        fila.insertCell().innerText = actividad.horaFinal;
        fila.insertCell().innerText = actividad.nombreActividad;
        fila.insertCell().innerText = actividad.tipoActividad;
        fila.insertCell().innerText = actividad.peso;
        fila.insertCell().innerText = actividad.imc;
    });
};

cargarLista();

function validaHoraInicio() {
    if (hInicio.value === "") {
        error = false;
        hInicio.classList.add("vacio");
    } else {
        error = true;
        hInicio.classList.remove("vacio");
    }
}

function validaHoraFinal() {
    if (hFinal.value === "") {
        error = false;
        hFinal.classList.add("vacio");
    } else {
        error = true;
        hFinal.classList.remove("vacio");
    }
}

function validaNombre() {
    if (nombre.value === "") {
        error = false;
        nombre.classList.add("vacio");
    } else {
        error = true;
        nombre.classList.remove("vacio");
    }
}

function validaTipo() {
    if (tipo.value === "") {
        error = false;
        hInicio.classList.add("vacio");
    } else {
        error = true;
        hInicio.classList.remove("vacio");
    }
}

function validaPeso() {
    if (peso.value === "") {
        error = false;
        peso.classList.add("vacio");
    } else {
        error = true;
        peso.classList.remove("vacio");
    }
}

function validaIMC() {
    if (imc.value === "") {
        error = false;
        imc.classList.add("vacio");
    } else {
        error = true;
        imc.classList.remove("vacio");
    }
}

function validaInfo() {
    validaHoraInicio();
    validaHoraFinal();
    validaNombre();
    validaPeso();
    validaIMC();
    if (error == false) {
        actividad.horaInicial = hInicio.value;
        actividad.horaFinal = hFinal.value;
        actividad.nombreActividad = nombre.value;
        actividad.tipoActividad = tipo.value;
        actividad.peso = peso.value;
        actividad.imc = imc.value;
        limpiaTabla();
    } else {
        swal.fire({
            "icon": "warning",
            "title": "No se ha registrado la actividad",
            "text": "Revise los campos resaltados"
        })
    };
    registrarDatos(actividad, "/registrar-actividad");
}

function limpiaTabla() {
    hInicio.value = "";
    hFinal.value = "";
    peso.value = "";
    imc.value = "";
    nombre.value = "";
}

btnRegistro.addEventListener('click', Event => {
    validaInfo();
});

//codigo de chart.js
const ctx = document.getElementById('myChart');

var etiquetas = ['Correr', 'Pesas', 'Crosfit', 'Fuerza', 'Ciclismo', 'Yoga', 'Natacion'];
var datos = [12, 19, 3, 5, 2, 3, 14]



new Chart(ctx, {
    type: 'line',
    data: {
        labels: etiquetas,
        datasets: [{
            label: 'Actividad fisica',
            fill: true,
            borderColor: "#DA3D1B",
            data: datos,
            borderWidth: 5,

        }]
    },
    options: {
        scales: {

            y: {
                beginAtZero: true

            }
        },
        responsive: false,
        maintainAspectRatio: false,
        width: 600,
        height: 600

    }
});
// ctx.canvas.width = 600;
// ctx.canvas.height = 600;