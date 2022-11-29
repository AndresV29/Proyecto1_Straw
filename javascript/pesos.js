const txtFecha = document.getElementById("txt-fecha-registro");
const txtPeso = document.getElementById("txt-peso-registro");
const txtEstatura = document.getElementById("txt-estatura");
const btnRegistrarPeso = document.getElementById("btn-registrar-peso");
const tblHistorial = document.querySelector("#tbl-pesos tbody");
let historial = {};
let graficoPesos = document.getElementById("grafica-pesos");

const calcularImc = () => {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;
    let imc = peso / Math.pow(estatura, 2);

    return imc.toFixed(2);
};

const clasificarImc = (imc) => {
    let clasificacion = "";

    if (imc >= 40) {
        clasificacion = "Obesidad-3";
    } else {
        if (imc >= 35) {
            clasificacion = "Obesidad-2";
        } else {
            if (imc >= 30) {
                clasificacion = "Obesidad-1";
            } else {
                if (imc >= 25) {
                    clasificacion = "Sobrepeso";
                } else {
                    if (imc >= 18.5) {
                        clasificacion = "Peso-normal";
                    } else {
                        clasificacion = "Peso-bajo";
                    }
                }
            }
        }
    }
    return clasificacion;
};

const imprimirTabla = () => {
    let clasificacion = clasificarImc(historial.imc);

    let fila = tblHistorial.insertRow();
    fila.insertCell().innerText = historial.fecha;
    fila.insertCell().innerText = historial.peso;
    fila.insertCell().innerText = historial.imc;

    let celdaClasif = fila.insertCell();
    celdaClasif.innerText = clasificacion;
    celdaClasif.classList.add(clasificacion);
};

const validarPesos = () => {
    let error = false;

    if (txtFecha.value == "") {
        error = true;
        txtFecha.classList.add("vacio");
    } else {
        txtFecha.classList.remove("vacio");
    }

    if (txtPeso.value == "") {
        error = true;
        txtPeso.classList.add("vacio");
    } else {
        txtPeso.classList.remove("vacio");
    }

    if (txtEstatura.value == "") {
        error = true;
        txtEstatura.classList.add("vacio");
    } else {
        txtEstatura.classList.remove("vacio");
    }

    if (error == false) {
        historial.fecha = txtFecha.value;
        historial.peso = txtPeso.value;
        historial.estatura = txtEstatura.value;
        historial.imc = calcularImc();
        imprimirTabla();
    } else {
        console.log("Por favor rellene los campos resaltados en rojo");
    }
};

btnRegistrarPeso.addEventListener("click", validarPesos);

var chart = new Chart(graficoPesos, {
    type: "line",
    data: {
        labels: ["Peso", "Fecha"],
        datasets: [{
            label: "Grafica Historial de Pesos",
            backgroundColor: "rgb(0,0,0,1.0)",
            borerColor: "rgb(0,255,0)",
            data: [txtPeso.value, txtFecha.value],
        }, ],
    },
    options: {},
});