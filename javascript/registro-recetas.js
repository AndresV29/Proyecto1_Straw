// validacion recetas // validacion recetas // validacion recetas // validacion recetas // validacion recetas //
const btnAgregarReceta = document.getElementById("btn-agregar-receta");
const txtNombreReceta = document.getElementById("txt-nombre-receta");
const txtIngredientes = document.getElementById("txt-ingredientes");
const fileFotoReceta = document.getElementById("file-foto-receta");
const txtPasosReceta = document.getElementById("txt-pasos-receta");
const txtTipoComida = document.getElementById("txt-tipo-comida");
const txtCategoriaReceta = document.getElementById("txt-categoria-receta");

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
    if (fotoReceta == "") {
        error = true;
        fileFotoReceta.classList.add("vacio");
    } else {
        fileFotoReceta.classList.remove("vacio");
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
};
btnAgregarReceta.addEventListener("click", validarRecetas);