moment.locale('es');
const cuerpoTabla = document.querySelector('#tbl-perfil tbody');
const fotoPerfil = document.getElementById('fotoPerfil');
let listaUsuarios = [];
let listaPesos = []

const cargarLista = async() => {
    listaUsuarios = await obtenerDatos('/obtener-usuario');
    mostrarTabla();
};

const cargarListapesos = async() => {
    listaPesos = await obtenerDatos('/obtener-pesos');

};

const imagenPhoto = (imagen) => {
    let img = document.createElement('img');
    img.src = imagen;
    return img
};

const agua = (peso) => {
    resultado = peso / 7;
    resultado = Math.round(resultado, 0);
    return `${resultado} vasos de 250 ml`;
}


const proteina = (genero, actividad, peso) => {
    if (genero == 'masculino' && actividad == 'si') {
        resultado = `min ${1.7*peso} g    max ${2.5*peso} g`;
    } else {
        resultado = `${0.8*peso} g`;
        if (genero == 'femenino' && actividad == 'si') {
            resultado = `min ${1.6*peso} g    max ${1.8*peso} g`;
        } else {
            resultado = `${0.8*peso} g`;
        }
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
        fila.insertCell().innerText = proteina(usuario.genero, usuario.actividad, usuario.pesoMeta);
        fila.insertCell().innerText = usuario.imcdesdeotrapagina;
        fila.insertCell().innerText = usuario.actividad;
        fila.insertCell().appendChild(imagenPhoto(usuario.foto))
    });
};

cargarLista();