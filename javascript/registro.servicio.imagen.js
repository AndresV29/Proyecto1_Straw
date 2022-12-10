const botonGuardar = document.getElementById('txt-foto');
const imagen = document.getElementById('imagenPerfil');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dptivtkvx',
    uploadPreset: 'gerald'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

if (botonGuardar) {
    botonGuardar.addEventListener('click', () => {
        widget_cloudinary.open();
    }, false);
}
// botonGuardar.addEventListener('click', () => {
//     widget_cloudinary.open();
// }, false);