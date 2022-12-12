moment.locale('es');
const txtFecha = document.getElementById("txt-fecha-registro");
const txtPeso = document.getElementById("txt-peso-registro");
const txtEstatura = document.getElementById("txt-estatura");
const btnRegistrarPeso = document.getElementById("btn-registrar-peso");
const tblHistorial = document.querySelector("#tbl-pesos tbody");
let historial = {};
let graficoPesos = document.getElementById("grafica-pesos");
let chartData = [];

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

const imprimirTabla = (listaMediciones) => {
    listaMediciones.forEach((historial) => {
        let imc = historial.peso / Math.pow(historial.estatura, 2);
        let clasificacion = clasificarImc(imc);

        let fila = tblHistorial.insertRow();
        fila.insertCell().innerText = moment(historial.fecha).format('MM-DD-YYYY');
        fila.insertCell().innerText = historial.peso;
        fila.insertCell().innerText = imc.toFixed(2);

        let celdaClasif = fila.insertCell();
        celdaClasif.innerText = clasificacion;
        celdaClasif.classList.add(clasificacion);
    });
};

const validarPesos = () => {
    let error = false;
    const fechaActual = new Date();
    const fechaInput = new Date(txtFecha.value);
    console.log(fechaActual, fechaInput, txtFecha.value);
    if (txtFecha.value == "" || fechaInput > fechaActual) {
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

    if (error) {
        Swal.fire({
            icon: "warning",
            title: "No se ha registrado el peso",
            text: "Revise los campos resaltados",
        });
    } else {
        let nuevoPeso = {
            fecha: txtFecha.value,
            peso: txtPeso.value,
            estatura: txtEstatura.value,
        };

        registrarDatos(nuevoPeso, "/registrar-peso", "pesos.html");
    }
};

btnRegistrarPeso.addEventListener("click", validarPesos);

moment.locale("es");
const crearGrafico = (arrFechas, arrPesos) => {
    let contexto = document.getElementById("grafica-pesos").getContext("2d");
    let grafico = new Chart(contexto, {
        type: "line",
        data: {
            labels: arrFechas,
            datasets: [{
                label: "Pesos",
                data: arrPesos,
                backgroundColor: ["#1289A7"],
            }, ],
        },
    });
};

const obtenerPesos = async() => {
    // se llama a la funcion obtenerDatos del servicio general
    let listaMediciones = await obtenerListaPesos("obtener-pesos");
    let arrFechas = [];
    let arrPesos = [];

    listaMediciones.forEach((medicion) => {
        arrFechas.push(moment(medicion.fecha).add(1, "days").format("MM-DD-YYYY"));
        arrPesos.push(medicion.peso);
    });
    imprimirTabla(listaMediciones);
    crearGrafico(arrFechas, arrPesos);
};

obtenerPesos();

//let chart = null;
//const updateChart = () => {
//   chartData.push({
//       fecha: txtFecha.value,
//     peso: txtPeso.value,
// });

//  if (chart !== null) {
//    chart.destroy();
// }

// chart = new Chart(graficoPesos, {
//   type: "line",

// data: {
//   labels: chartData.map((row) => row.fecha),
// datasets: [{
//   label: "Grafica Historial de Pesos",
// backgroundColor: "rgb(0,0,0,1.0)",
//  borerColor: "rgb(0,255,0)",
// data: chartData.map((row) => row.peso),
//  }, ],
//  },
//  options: {},
//  });
//};
//window.onload = function() {
//    chart = new Chart(graficoPesos, {
//        type: "line",
//
//       data: {
//           labels: chartData.map((row) => row.fecha),
//           datasets: [{
//              label: "Grafica Historial de Pesos",
//             backgroundColor: "rgb(0,0,0,1.0)",
//            borerColor: "rgb(0,255,0)",
//           data: chartData.map((row) => row.peso),
//      }, ],
//     },
//    options: {},
//  });
//};