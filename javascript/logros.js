const txtObjetivo = document.getElementById("txt-objetivo");
const txtObj = document.getElementById("txt-obj");
const txtHoras = document.getElementById("txt-horas");
const txtPesoMeta = document.getElementById("txt-pesometa");
const txtImc = document.getElementById("txt-imc");
const txtDificultad = document.getElementById("txt-dificultad");

let objetivo = txtObjetivo.value;
let obj = txtObj.value;
let horas = txtHoras.value;
let pesoMeta = txtPesoMeta.value;
let imc = txtImc.value;
let dificultad = txtDificultad.value;

const btnRegistrar = document.getElementById("btn-registrar-logros");
const tblLogros = document.querySelector("#tbl-logro tbody");
let listaLogros = [];
let logro = {};

const listarLogro = async() => {
    listaLogros = await obtenerDatos("/obtener-logro");
    imprimirTabla();
};

const imprimirTabla = () => {
    tblLogros.innerHTML = "";
    listaLogros.forEach((logro) => {
        let fila = tblLogros.insertRow();
        fila.insertCell().innerText = logro.objetivo;
        fila.insertCell().innerText = logro.obj;
        fila.insertCell().innerText = logro.horas;
        fila.insertCell().innerText = logro.peso;
        fila.insertCell().innerText = logro.imc;
        fila.insertCell().innerText = logro.dificultad;
    });
};
const limpiar = () => {
    logro = {
        objetivo: (txtObjetivo.value = "."),
        obj: (txtObj.value = "."),
        horas: (txtHoras.value = "."),
        peso: (txtPesoMeta.value = "."),
        imc: (txtImc.value = "."),
        dificultad: (txtDificultad.value = "."),
    };
};

const validar = () => {
    let error = false;

    if (txtObjetivo.value == "") {
        error = true;
        txtObjetivo.classList.add("vacio");
    } else {
        txtObjetivo.classList.remove("vacio");
    }

    if (txtObj.value == "") {
        error = true;
        txtObj.classList.add("vacio");
    } else {
        txtObj.classList.remove("vacio");
    }

    if (txtHoras.value == "") {
        error = true;
        txtHoras.classList.add("vacio");
    } else {
        txtHoras.classList.remove("vacio");
    }

    if (txtPesoMeta.value == "") {
        error = true;
        txtPesoMeta.classList.add("vacio");
    } else {
        txtPesoMeta.classList.remove("vacio");
    }

    if (txtImc.value == "") {
        error = true;
        txtImc.classList.add("vacio");
    } else {
        txtImc.classList.remove("vacio");
    }

    if (txtDificultad.value == "") {
        error = true;
        txtDificultad.classList.add("vacio");
    } else {
        txtDificultad.classList.remove("vacio");
    }
    if (error) {
        Swal.fire({
            icon: "error",
            title: "No es posible registrar el logro",
            text: "Favor rellene los campos resaltados",
        });
    } else {
        logro = {
            objetivo: (txtObjetivo.value = "."),
            obj: (txtObj.value = "."),
            horas: (txtHoras.value = "."),
            peso: (txtPesoMeta.value = "."),
            imc: (txtImc.value = "."),
            dificultad: (txtDificultad.value = "."),
        };
        Swal.fire({
            icon: "success",
            //pendiente un title para cuando el registro es exitoso
            title: "",
            text: "Logro registrado exitosamente",
        });
        registrarDatos(logro, "/registrar-logro");
        limpiar();
    }
};

btnRegistrar.addEventListener("click", validar);
listarLogro();