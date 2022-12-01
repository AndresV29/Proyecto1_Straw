const cuerpoTabla = document.querySelector('#tbl-perfil tbody')
let listaUsuarios = [];
const inicializarListas = async() => {
    listaUsuarios = await obtenerDatos('/obtener-usuario');
    mostrarTabla();
};

const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';
    listaUsuarios.forEach(usuario => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = usuario.nombre;
        fila.insertCell().innerText = usuario.nacimiento;
        fila.insertCell().innerText = usuario.estatura;
        fila.insertCell().innerText = usuario.genero;
        fila.insertCell().innerText = usuario.correo;
        fila.insertCell().innerText = usuario.pesoMeta;

    });

};


inicializarListas();