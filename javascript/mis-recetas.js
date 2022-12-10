const filtroTipoComida = document.getElementById("filtro-tipo-comida");
const filtroCatComida = document.getElementById("filtro-categoria-receta");
const filtroNombre = document.getElementById("txt-nombre-receta");
const cuerpoTabla = document.querySelector("#tbl-recetas tbody");
const botonLimpiarF = document.querySelector("#btn-limpiar-filtro");

let listaRecetas = [];

const imagenPhoto = (imagen) => {
    let img = document.createElement('img');
    img.src = imagen;
    return img
};

const cargarLista = async() => {
    listaRecetas = await obtenerDatos("/obtener-recetas");
    mostrarRecetas();

};

const mostrarRecetas = () => {
    cuerpoTabla.innerHTML = "";

    const copiaLista = [...listaRecetas]
    const listaFiltrada = copiaLista.filter((receta) => {
        if (filtroTipoComida.value == "") {
            return true;
        }
        return filtroTipoComida.value.toLowerCase() == receta.tipoComida.toLowerCase()
    }).filter((receta) => {
        if (filtroCatComida.value == "") {
            return true;
        }
        console.log(receta)
        return filtroCatComida.value.toLowerCase() == receta.categoriaComida.toLowerCase()
    }).filter((receta) => {
        if (filtroNombre.value == "") {
            return true;
        }
        console.log(receta)
        return filtroNombre.value.toLowerCase() == receta.nombre.toLowerCase() || receta.nombre.toLowerCase().includes(filtroNombre.value.toLowerCase())
    })

    listaFiltrada.forEach(receta => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = receta.nombre;
        fila.insertCell().innerText = receta.ingredientes;
        fila.insertCell().innerText = receta.pasosReceta;
        fila.insertCell().innerText = receta.tipoComida;
        fila.insertCell().innerText = receta.categoriaComida;
        fila.insertCell().appendChild(imagenPhoto(receta.imagen));
    });
};

cargarLista();

filtroTipoComida.addEventListener("change", mostrarRecetas);
filtroCatComida.addEventListener("change", mostrarRecetas);
filtroNombre.addEventListener("change", mostrarRecetas);
botonLimpiarF.addEventListener("click", () => {
    filtroTipoComida.value = "";
    filtroCatComida.value = "";
    filtroNombre.value = "";
    mostrarRecetas();

});