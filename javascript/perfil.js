moment.locale('es');
const cuerpoTabla = document.querySelector('#tbl-perfil tbody');
let listaUsuarios = [];

const cargarLista = async() => {
    listaUsuarios = await obtenerDatos('/obtener-usuario');
    mostrarTabla();
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
        fila.insertCell().innerText = usuario.foto;
        fila.insertCell().innerText = usuario.pesoMeta;
    });
};

cargarLista();