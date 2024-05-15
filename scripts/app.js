
let inputNombre = document.getElementById("nombre")
let inputApellido = document.getElementById("apellido")
let inputComentarios = document.getElementById("comentarios")
let inputEmail = document.getElementById("email")
let inputTelefono = document.getElementById("telefono")
let inputMotivo = document.getElementById("motivo")

let persona2 = {
    nombre: "milagros",
    apellido: "cisneros",
    comentarios: "holi",
    email: "mili.mmc@gmail.com",
    telefono: 1126439620,
    motivo: "informacion",
}
 
let persona = localStorage.getItem("persona")
persona = JSON.parse(persona)
console.log(persona)

inputNombre.value = persona.nombre
inputApellido.value = persona.apellido
inputComentarios.value = persona.comentarios
inputEmail.value = persona.email
inputTelefono.value = persona.telefono
inputMotivo.value = persona.motivo

function guardar_localstorage() {
   localStorage.setItem("persona", JSON.stringify(persona2));
}

//guardar_localstorage();












