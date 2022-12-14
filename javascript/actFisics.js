const hInicio = document.getElementById("h-inicio");
const hFinal = document.getElementById("h-final");
const fecha = document.getElementById("fecha");
const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipo");
const peso = document.getElementById("peso");
const imc = document.getElementById("imc");
const btnRegistro = document.getElementById("registro");
let actividad = {};

let error = false;
const cuerpoTabla = document.querySelector("#tbl-actividades tbody");
let listaActividades = [];
//let listaActiv = [];
let arrTipos = [];
let arrFrecuencia = [];

const cargarLista = async() => {
    listaActividades = await obtenerDatos("/listar-actividades");
    mostrarActividades();

};

const mostrarActividades = () => {
    cuerpoTabla.innerHTML = "";
    listaActividades.forEach(actividad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = actividad.horaInicio;
        fila.insertCell().innerText = actividad.horaFinal;
        fila.insertCell().innerText = actividad.nombre;
        fila.insertCell().innerText = actividad.tipo;
        fila.insertCell().innerText = actividad.peso;
        fila.insertCell().innerText = actividad.imc;
    });
};

cargarLista();

function validaHoraInicio() {
    if (hInicio.value === "") {
        error = true;
        hInicio.classList.add("vacio");
    } else {
        hInicio.classList.remove("vacio");
    }
}

function validaHoraFinal() {
    if (hFinal.value === "") {
        error = true;
        hFinal.classList.add("vacio");
    } else {
        hFinal.classList.remove("vacio");
    }
}

function validaNombre() {
    if (nombre.value === "") {
        error = true;
        nombre.classList.add("vacio");
    } else {
        nombre.classList.remove("vacio");
    }
}

function validaTipo() {
    if (tipo.value === "") {
        error = true;
        tipo.classList.add("vacio");
    } else {
        tipo.classList.remove("vacio");
    }
}

function validaPeso() {
    if (peso.value === "") {
        error = true;
        peso.classList.add("vacio");
    } else {
        peso.classList.remove("vacio");
    }
}

function validaIMC() {
    if (imc.value === "") {
        error = true;
        imc.classList.add("vacio");
    } else {
        imc.classList.remove("vacio");
    }
}
const obtenerHorasTotales = () => {
    let horasTotales = listaActividades.reduce((acumulador, valorActual) => {
        const horaInicio = new Date();
        horaInicio.setHours(valorActual.horaInicio.split(":")[0]);
        horaInicio.setMinutes(valorActual.horaInicio.split(":")[1]);
        const horaFinal = new Date();
        horaFinal.setHours(valorActual.horaFinal.split(":")[0]);
        horaFinal.setMinutes(valorActual.horaFinal.split(":")[1]);
        //let calHoras = horaFinal - horaInicio;
        const msInHour = 1000 * 60 * 60;
        let calHoras = Math.round(Math.abs(horaFinal - horaInicio) / msInHour);
        console.log(horaInicio);
        console.log("acum+calHoras=", acumulador + calHoras);
        console.log("solo calHoras", calHoras)
        if (isNaN(calHoras)) {
            console.log("entra if")
            return acumulador + 0;
        }
        return acumulador + calHoras;
    }, 0);
    console.log(horasTotales)
};

function validaFecha() {
    if (fecha.value === "") {
        error = true;
        fecha.classList.add("vacio");
    } else {
        fecha.classList.remove("vacio");
    }
}

function validaInfo() {

    validaNombre();
    validaTipo();
    validaHoraInicio();
    validaHoraFinal();
    validaFecha();
    validaIMC();
    validaPeso();




    if (error == false) {
        console.log(hInicio.value);
        console.log(hFinal.value);
        console.log(fecha.value);
        console.log(nombre.value);
        console.log(tipo.value);
        console.log(peso.value);
        console.log(imc.value);

        actividad.horaInicio = hInicio.value;
        actividad.horaFinal = hFinal.value;
        actividad.fecha = fecha.value;
        actividad.nombre = nombre.value;
        actividad.tipo = tipo.value;
        actividad.peso = peso.value;
        actividad.imc = imc.value;
        registrarDatos(actividad, "/registrar-actividad", "act-fisica.html");
        //obtenerHorasTotales();
        limpiaTabla();

    } else {

        swal.fire({
            "icon": "warning",
            "title": "No se ha registrado la actividad",
            "text": "Revise los campos resaltados"
        })
    };
}

function limpiaTabla() {
    hInicio.value = "";
    hFinal.value = "";
    peso.value = "";
    imc.value = "";
    nombre.value = "";
}

/*btnRegistro.addEventListener('click', Event => {
    validaInfo();
});*/

btnRegistro.addEventListener("click", validaInfo);

//codigo de chart.js

const crearGrafico = (arrTipos, arrFrecuencia) => {
    let ctx = document.getElementById('myChart').getContext('2d');

    let grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrTipos,
            datasets: [{
                label: 'Actividad fisica',
                fill: true,
                borderColor: "#DA3D1B",
                data: arrFrecuencia,
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
            //width: 600,
            // height: 600
        }
    });
};



const obtenerActividades = async() => {
    //llama la funcion
    let listaActiv = [];
    listaActiv = await obtenerDatos('/listar-actividades');
    let prev;

    listaActiv.sort();

    listaActiv.forEach(actividad => {
        if (!arrTipos.includes(actividad.tipo)) {
            arrTipos.push(actividad.tipo);
            arrFrecuencia.push(1);
        } else {
            ++arrFrecuencia[arrFrecuencia.length - 1];
            prev = actividad;
        }

        //arrFrecuencia.push(actividad.peso);
    });

    //arrFrecuencia = keys(arrTipos);

    crearGrafico(arrTipos, arrFrecuencia);
};

obtenerActividades();