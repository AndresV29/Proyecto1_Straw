// validacion recetas // validacion recetas // validacion recetas // validacion recetas // validacion recetas //

const btnAgregarReceta = document.getElementById("btn-agregar-receta");
validarRecetas = () => {
    const txtNombreReceta = document.getElementById("txt-nombre-receta");
    const txtIngredientes = document.getElementById("txt-ingredientes");
    const fileFotoReceta = document.getElementById("file-foto-receta");
    const txtPasosReceta = document.getElementById("txt-pasos-receta");
    const txtTipoComida = document.getElementById("txt-tipo-comida");
    const txtCategoriaReceta = document.getElementById("txt-categoria-receta");
    let nombreReceta = txtNombreReceta.value;
    let ingredientes = txtIngredientes.value;
    let fotoReceta = fileFotoReceta.value;
    let pasosReceta = txtPasosReceta.value;
    let tipoComida = txtTipoComida.value;
    let categoriaComida = txtCategoriaReceta.value;
    if (nombreReceta == "") {
        txtNombreReceta.classList.add("vacio");
    } else {
        txtNombreReceta.classList.remove("vacio");
    }
    if (ingredientes == "") {
        txtIngredientes.classList.add("vacio");
    } else {
        txtIngredientes.classList.remove("vacio");
    }
    if (fotoReceta == "") {
        fileFotoReceta.classList.add("vacio");
    } else {
        fileFotoReceta.classList.remove("vacio");
    }
    if (pasosReceta == "") {
        txtPasosReceta.classList.add("vacio");
    } else {
        txtPasosReceta.classList.remove("vacio");
    }
    if (tipoComida == "") {
        txtTipoComida.classList.add("vacio");
    } else {
        txtTipoComida.classList.remove("vacio");
    }
    if (categoriaComida == "") {
        txtCategoriaReceta.classList.add("vacio");
    } else {
        txtCategoriaReceta.classList.remove("vacio");
    }
};
btnAgregarReceta.addEventListener("click", validarRecetas);