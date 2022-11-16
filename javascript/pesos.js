const btnRegistrarPeso = document.getElementById("btn-registrar-peso");

validarPesos = () => {
    const txtPeso = document.getElementById("txt-peso-registro");
    const txtFechaRegistro = document.getElementById("txt-fecha-registro");
    let registroPeso = txtPeso.value;
    let registroFecha = txtFechaRegistro.value;
    if (registroPeso == "") {
        txtPeso.classList.add("vacio");
    } else {
        txtPeso.classList.remove("vacio");
    }
    if (registroFecha == "") {
        txtFechaRegistro.classList.add("vacio");
    } else {
        txtFechaRegistro.classList.remove("vacio");
    }
};


btnRegistrarPeso.addEventListener("click", validarPesos);