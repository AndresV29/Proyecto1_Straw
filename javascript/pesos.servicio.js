const registrarPesos = async(ppesos, endPoint) => {
    let url = `http://localhost:3000/api/${endPoint}`;

    await axios({
        method: "post",
        url: url,
        data: ppesos,
    });
};

const obtenerListaPesos = async(endPoint) => {
    let url = `http://localhost:3000/api/${endPoint}`;
    let listaPesos = [];

    await axios({
        method: "get",
        url: url,
    }).then((response) => {
        listaPesos = response.data.lista;
    });

    return listaPesos;
};

const eliminarDatos = async(endPoint, _id) => {
    let url = `http://localhost:3000/api/${endPoint}`;
    await axios({
            url: url,
            method: "delete",
            responseType: "json",
            data: {
                _id: _id,
            },
        })
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: response.data.msj,
            }).then(() => {
                window.location.reload();
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: error,
            });
        });
};