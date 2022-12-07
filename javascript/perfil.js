moment.locale('es');
const cuerpoTabla = document.querySelector('#tbl-perfil tbody');
const fotoPerfil = document.getElementById('fotoPerfil');
let listaUsuarios = [];

const cargarLista = async() => {
    listaUsuarios = await obtenerDatos('/obtener-usuario');
    mostrarTabla();
};
const imagenPhoto = (imagen) => {
    let img = document.createElement('img');
    img.src = imagen;
    return img
};

const agua = (peso) => {
    resultado = peso % 7;
    return `${resultado} vasos de 250 ml`;
}


const proteina = (usuario, estatura) => {
    if (usuario == 'masculino' && estatura < 52) {
        resultado = '200 gramos';
    } else {
        resultado = '150 gramos';
    }
    return resultado;
};

const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaUsuarios.forEach(usuario => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = usuario.nombre;
        fila.insertCell().innerText = moment(usuario.nacimiento).add(1, 'days').format('MM-DD-YYYY');
        fila.insertCell().innerText = usuario.estatura;
        fila.insertCell().innerText = usuario.genero;
        fila.insertCell().innerText = usuario.correo;
        fila.insertCell().innerText = usuario.pesoMeta;
        fila.insertCell().innerText = agua(usuario.pesoMeta);
        fila.insertCell().innerText = proteina(usuario.genero, usuario.estatura);
        fila.insertCell().innerText = usuario.imcdesdeotrapagina;
        fila.insertCell().innerText = usuario.actividad;
        fila.insertCell().appendChild(imagenPhoto(usuario.foto))
    });
};

cargarLista();