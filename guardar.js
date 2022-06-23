function guardar()
{
    db.collection("ussuario").add({
        usuario: document.getElementById("usuario").value,
        clave: document.getElementById("clave").value
       
    })
    .then((docRef) => {
        alert("Registro con Exito");
    })
    .catch((error) => {
       alert("Error al ingresar");
    });
}