const registrarDatos = async(pdatos, pendPoint) => {
    let url = `http://localhost:3000/api${pendPoint}`
    url += pendPoint;
    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};