document.getElementById("registro").addEventListener("click", function() {
    alert("Se han registrado los datos de manera exitosa")
})

function validateForm() {
    let x = document.forms["myForm"]["nombre"].value;
    if (x == "") {
        alert("Debe proveer un nombre para poder registrar una actividad");
        return false;
    }
}