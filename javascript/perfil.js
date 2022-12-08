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
    return listaPesos[listaPesos.length - 1];
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
const imc = (peso, estatura) => {
    const indice = peso / Math.pow(estatura, 2);
    return indice.toFixed(2);
};

const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';
    const dato = listaUsuarios[listaUsuarios.length - 1]
    const ultimoPeso = await cargarListapesos();
    const indice = imc(ultimoPeso.peso, ultimoPeso.estatura);
    let fila = cuerpoTabla.insertRow();
    fila.insertCell().innerText = dato.nombre;
    fila.insertCell().innerText = moment(dato.nacimiento).add(1, 'days').format('MM-DD-YYYY');
    fila.insertCell().innerText = dato.estatura;
    fila.insertCell().innerText = dato.genero;
    fila.insertCell().innerText = dato.correo;
    fila.insertCell().innerText = dato.pesoMeta;
    fila.insertCell().innerText = agua(dato.pesoMeta);
    fila.insertCell().innerText = proteina(dato.genero, dato.actividad, dato.pesoMeta);
    fila.insertCell().innerText = indice;
    fila.insertCell().innerText = dato.actividad;
    fila.insertCell().appendChild(imagenPhoto(dato.foto))
        // listaUsuarios.forEach(usuario => {
        //     let fila = cuerpoTabla.insertRow();
        //     fila.insertCell().innerText = usuario.nombre;
        //     fila.insertCell().innerText = moment(usuario.nacimiento).add(1, 'days').format('MM-DD-YYYY');
        //     fila.insertCell().innerText = usuario.estatura;
        //     fila.insertCell().innerText = usuario.genero;
        //     fila.insertCell().innerText = usuario.correo;
        //     fila.insertCell().innerText = usuario.pesoMeta;
        //     fila.insertCell().innerText = agua(usuario.pesoMeta);
        //     fila.insertCell().innerText = proteina(usuario.genero, usuario.actividad, usuario.pesoMeta);
        //     fila.insertCell().innerText = usuario.imcdesdeotrapagina;
        //     fila.insertCell().innerText = usuario.actividad;
        //     fila.insertCell().appendChild(imagenPhoto(usuario.foto))
        // });
};

cargarLista();