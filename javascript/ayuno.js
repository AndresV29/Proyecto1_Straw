const btnIniciar = document.getElementById("btn-iniciar");
const btnDetener = document.getElementById("btn-detener");
const txtPlan = document.getElementById("txt-plan");
const txtInicio = document.getElementById("txt-inicio");
const txtFinalizacion = document.getElementById("txt-finalizacion");
const tblAyunos = document.querySelector('#tbl-info tbody');
let ayuno = {};

imprimirTabla = () => {
    let fila = tblAyunos.insertRow();
    let i = 1
    fila.insertCell().innerText = i;
    fila.insertCell().innerText = ayuno.inicio;
    fila.insertCell().innerText = ayuno.finalizacion;
    fila.insertCell().innerText = ayuno.plan;

};


validar = () => {
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
        imprimirTabla();
    } else {
        console.log('Por favor, rellene los campos resaltados.')
    }

};

btnIniciar.addEventListener("click", validar);
btnDetener.addEventListener("click", validar);