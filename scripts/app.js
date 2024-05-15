

let inputNombre = document.getElementById("nombre")
let inputApellido = document.getElementById("apellido")
let inputComentarios = document.getElementById("comentarios")
let inputEmail = document.getElementById("email")
let inputTelefono = document.getElementById("telefono")
let inputMotivo = document.getElementById("motivo")

let persona = {
    nombre: "",
    apellido: "",
    comentarios: "",
    email: "",
    telefono: "",
    motivo: "",
}

//rellenar formulario con localstorage

persona = localStorage.getItem("persona")
persona = JSON.parse(persona)

inputNombre.value = persona.nombre
inputApellido.value = persona.apellido
inputComentarios.value = persona.comentarios
inputEmail.value = persona.email
inputTelefono.value = persona.telefono
inputMotivo.value = persona.motivo

inputNombre.addEventListener("change", (evento) => {
    persona.nombre = inputNombre.value 
    guardar_localstorage() 
    console.log(persona)
})
inputApellido.addEventListener("change", (evento) => {
    persona.apellido = inputApellido.value 
    guardar_localstorage() 
    console.log(persona)
})
inputComentarios.addEventListener("change", (evento) => {
    persona.comentarios = inputComentarios.value 
    guardar_localstorage() 
    console.log(persona)
})
inputEmail.addEventListener("change", (evento) => {
    persona.email = inputEmail.value 
    guardar_localstorage() 
    console.log(persona)
})
inputTelefono.addEventListener("change", (evento) => {
    persona.telefono = inputTelefono.value 
    guardar_localstorage() 
    console.log(persona)
})
inputMotivo.addEventListener("change", (evento) => {
    persona.motivo = inputMotivo.value 
    guardar_localstorage() 
    console.log(persona)
})

function guardar_localstorage() {
    localStorage.setItem("persona", JSON.stringify(persona));
}












