const registrarDatos = async(pdatos, pendPoint) => {
    let url = `http://localhost:3000/api${pendPoint}`
    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerDatos = async(pendPoint) => {
    let url = `http://localhost:3000/api${pendPoint}`
    let listaDatos = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaDatos = response.data.lista
    });
    return listaDatos;

};