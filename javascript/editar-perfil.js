const txtNombre = document.getElementById("txt-nombre");
const txtFechaNacimiento = document.getElementById("txt-fecha-nac");
const txtEstatura = document.getElementById("txt-estatura");
const txtGenero = document.getElementById("txt-genero");
const txtCorreo = document.getElementById("txt-correo");
const txtFoto = document.getElementById("txt-foto");
const imgPerfil = document.getElementById("imagenPerfil");
const txtPesoMeta = document.getElementById("txt-peso-meta");
const txtActividad = document.getElementById("txt-actividad");
const btnRegistrar = document.getElementById("btn-registrar");
let registro = {};
let identificadorMongo = localStorage.getItem('id_mongo');

let llenarCampos = async() => {
    let persona = await obtenerPersonaId(identificadorMongo);
    _id = persona._id;

    txtNombre.value = persona.nombre;
    txtEstatura.value = persona.estatura;
    txtFechaNacimiento.value = persona.nacimiento;
    txtCorreo.value = persona.correo;
    txtPesoMeta.value = persona.pesoMeta;
    imgPerfil.src = persona.foto;
    switch (persona.genero) {
        case 'masculino':
            txtGenero.selectedIndex = 1;
            break;
        case 'femenino':
            txtGenero.selectedIndex = 2;
            break;
        default:
            txtGenero.selectedIndex = 0;
            break;
    }
    switch (persona.actividad) {
        case 'si':
            txtActividad.selectedIndex = 1;
            break;
        case 'no':
            txtActividad.selectedIndex = 2;
            break;
        default:
            txtActividad.selectedIndex = 0;
    }
    txtFechaNacimiento.value = moment(persona.nacimiento).format('YYYY-MM-DD');

    console.log(persona);
}

llenarCampos();
const limpiar = () => {
    usuario = {
        nombre: txtNombre.value = "",
        nacimiento: txtFechaNacimiento.value = "",
        estatura: txtEstatura.value = "",
        genero: txtGenero.value = "",
        correo: txtCorreo.value = "",
        foto: imgPerfil.value = "",
        pesoMeta: txtPesoMeta.value = "",
        actividad: txtActividad.value = ""
    };
};
const validar = () => {
    let error = false;
    if (txtNombre.value == "") {
        error = true;
        txtNombre.classList.add("vacio");
    } else {
        txtNombre.classList.remove("vacio");
    }
    if (txtFechaNacimiento.value == "") {
        error = true;
        txtFechaNacimiento.classList.add("vacio");
    } else {
        txtFechaNacimiento.classList.remove("vacio");
    }
    if (txtEstatura.value == "") {
        error = true;
        txtEstatura.classList.add("vacio");
    } else {
        txtEstatura.classList.remove("vacio");
    }
    if (txtGenero.value == "") {
        error = true;
        txtGenero.classList.add("vacio");
    } else {
        txtGenero.classList.remove("vacio");
    }
    if (txtCorreo.value == "") {
        error = true;
        txtCorreo.classList.add("vacio");
    } else {
        txtCorreo.classList.remove("vacio");
    }
    if (txtActividad.value == "") {
        error = true;
        txtActividad.classList.add("vacio");
    } else {
        txtActividad.classList.remove("vacio");
    }
    // if (txtFoto.value == "") {
    //     error = true;
    //     txtFoto.classList.add("vacio");
    // } else {
    //     txtFoto.classList.remove("vacio");
    // }
    if (txtPesoMeta.value == "") {
        error = true;
        txtPesoMeta.classList.add("vacio");
    } else {
        txtPesoMeta.classList.remove("vacio");
    }
    if (error) {
        Swal.fire({
            icon: "error",
            title: "No es posible avanzar",
            text: "Favor rellene los campos resaltados",
        });
    } else {
        let usuario = {
            nombre: txtNombre.value,
            nacimiento: txtFechaNacimiento.value,
            estatura: txtEstatura.value,
            genero: txtGenero.value,
            correo: txtCorreo.value,
            foto: imgPerfil.src,
            pesoMeta: txtPesoMeta.value,
            actividad: txtActividad.value,
        };
        modificarPersona(_id, usuario, "/editar-usuario");
        limpiar();
    }
};
btnRegistrar.addEventListener("click", validar);