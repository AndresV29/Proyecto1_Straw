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

const obtenerPersonaId = async(identificacion) => {
    try {
        const response = await axios({
            method: 'get',
            params: { identificacion: identificacion },
            url: `http://localhost:3000/api/buscar-persona-identificacion`,
            responseType: 'json'
        })
        return response.data.persona;
    } catch (error) {
        console.log(error)
    }
}

const modificarPersona = async(p_id, pdatos) => {
    let url = `http://localhost:3000/api/editar-usuario`
    await axios({
        method: 'put',
        url: url,
        data: pdatos,
        id: p_id,

    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Edición exitosa',
            'text': response.data.msj

        }).then(() => {
            window.location.href = '../html/perfil.html';
        });

    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error',
            'text': error
        })
    });

};