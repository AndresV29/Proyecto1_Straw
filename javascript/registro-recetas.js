// validacion recetas // validacion recetas // validacion recetas // validacion recetas // validacion recetas //
const btnAgregarReceta = document.getElementById("btn-agregar-receta");
const txtNombreReceta = document.getElementById("txt-nombre-receta");
const txtIngredientes = document.getElementById("txt-ingredientes");
const fileFotoReceta = document.getElementById("file-foto-receta");
const txtPasosReceta = document.getElementById("txt-pasos-receta");
const txtTipoComida = document.getElementById("txt-tipo-comida");
const txtCategoriaReceta = document.getElementById("txt-categoria-receta");
// const tblRecetas = document.querySelector("#tbl-recetas");
let receta = {};

// const imprimirTablaRecetas = () => {
//     let fila = tblRecetas.insertRow();
//     fila.insertCell().innerText = receta.nombreReceta;
//     fila.insertCell().innerText = receta.ingredientes;
//     fila.insertCell().innerText = receta.pasosReceta;
//     fila.insertCell().innerText = receta.tipoComida;
//     fila.insertCell().innerText = receta.categoriaComida;
//     // falta agregar foto que no es innerText

// };

const cuerpoTabla = document.querySelector("#tbl-recetas tbody");
let listaRecetas = [];

const cargarLista = async() => {
    listaRecetas = await obtenerDatos("/obtener-recetas");
    mostrarRecetas();

};

const mostrarRecetas = () => {
    cuerpoTabla.innerHTML = "";
    listaRecetas.forEach(receta => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = receta.nombreReceta;
        fila.insertCell().innerText = receta.ingredientes;
        fila.insertCell().innerText = receta.pasosReceta;
        fila.insertCell().innerText = receta.tipoComida;
        fila.insertCell().innerText = receta.categoriaComida;
        fila.insertCell().innerText = receta.imagen;
    });
};

cargarLista();


validarRecetas = () => {
    let nombreReceta = txtNombreReceta.value;
    let ingredientes = txtIngredientes.value;
    let fotoReceta = fileFotoReceta.value;
    let pasosReceta = txtPasosReceta.value;
    let tipoComida = txtTipoComida.value;
    let categoriaComida = txtCategoriaReceta.value;
    let error = false;

    if (nombreReceta == "") {
        error = true;
        txtNombreReceta.classList.add("vacio");
    } else {
        txtNombreReceta.classList.remove("vacio");
    }
    if (ingredientes == "") {
        error = true;
        txtIngredientes.classList.add("vacio");
    } else {
        txtIngredientes.classList.remove("vacio");
    }
    if (pasosReceta == "") {
        error = true;
        txtPasosReceta.classList.add("vacio");
    } else {
        txtPasosReceta.classList.remove("vacio");
    }
    if (tipoComida == "") {
        error = true;
        txtTipoComida.classList.add("vacio");
    } else {
        txtTipoComida.classList.remove("vacio");
    }
    if (categoriaComida == "") {
        error = true;
        txtCategoriaReceta.classList.add("vacio");
    } else {
        txtCategoriaReceta.classList.remove("vacio");
    }
    if (error == false) {
        receta.nombreReceta = txtNombreReceta.value;
        receta.ingredientes = txtIngredientes.value;
        receta.pasosReceta = txtPasosReceta.value;
        receta.tipoComida = txtTipoComida.value;
        receta.categoriaComida = txtCategoriaReceta.value;

    } else {
        swal.fire({
            "icon": "warning",
            "title": "No se ha registrado la receta",
            "text": "Revise los campos resaltados"
        })
    };
    registrarDatos(receta, "/registrar-recetas");

};
btnAgregarReceta.addEventListener("click", validarRecetas);