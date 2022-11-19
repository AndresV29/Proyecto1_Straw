const hInicio = document.getElementById("h-inicio");
const hFinal = document.getElementById("h-final");
const nombre = document.getElementById("nombre");
const peso = document.getElementById("peso");
const imc = document.getElementById("imc");
const btnRegistro = document.getElementById("registro")

function validaInfo() {
    if (hInicio.value === "") {
        alert("Datos insuficientes: Hora de inicio");
        hInicio.classList.add("vacio");
    } else {
        alert("Se pudo registrar correctamente");
        hInicio.classList.remove("vacio");
    }
    if (hFinal.value === "") {
        alert("Datos insuficientes: Hora de finalizado");
        hFinal.classList.add("vacio");
    } else {
        alert("Se pudo registrar correctamente");
        hFinal.classList.remove("vacio");
    }
    if (nombre.value === "") {
        alert("Datos insuficientes: Nombre del ejercicio");
        nombre.classList.add("vacio");
    } else {
        alert("Se pudo registrar correctamente");
        nombre.classList.remove("vacio");
    }
    if (peso.value === "") {
        alert("Datos Insuficientes: Peso");
        peso.classList.add("vacio");
    } else {
        alert("Se pudo registrar correctamente");
        peso.classList.remove("vacio");
    }
    if (imc.value === "") {
        alert("Datos insuficientes: IMC Actual");
        imc.classList.add("vacio");
    } else {
        alert("Se pudo registrar correctamente");
        imc.classList.remove("vacio");
    }
}
//btnRegistro.addEventListener('click', validaInfo);

btnRegistro.addEventListener('click', Event => {
    validaInfo();
});