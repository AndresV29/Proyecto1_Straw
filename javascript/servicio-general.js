const registrarDatos = async(pdatos, pendPoint, redireccion) => {
    let url = `http://localhost:3000/api${pendPoint}`
    await axios({
        method: 'post',
        url: url,
        data: pdatos
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Registro exitoso',
            'text': response.data.msj

        }).then(() => {
            window.location.href = redireccion;
        });

    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error',
            'text': error
        })
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