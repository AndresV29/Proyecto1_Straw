const filtroTipoComida = document.getElementById("filtro-tipo-comida");
const filtroCatComida = document.getElementById("filtro-categoria-receta");
const cuerpoTabla = document.querySelector("#tbl-recetas tbody");
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
    let listaFiltrada;

    if (filtroTipoComida.value != "") {
        listaFiltrada = copiaLista.filter((receta) => {
            return receta.tipoComida === filtroTipoComida.value
        });
    } else if (filtroCatComida.value != "") {
        listaFiltrada = copiaLista.filter((receta) => {
            return receta.categoriaComida === filtroCatComida.value
        });
    } else {
        listaFiltrada = copiaLista
    };

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