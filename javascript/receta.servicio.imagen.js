const botonGuardar = document.getElementById('file-foto-receta');
const imagen = document.getElementById('foto-receta');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dptivtkvx',
    uploadPreset: 'gerald'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});
botonGuardar.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);