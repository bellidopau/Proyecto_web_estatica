
function guardar_localstorage() {
    localStorage.setItem("persona", JSON.stringify(persona));
}
let persona = {
    nombre: "milagros",
    apellido: "cisneros",
    edad: 27,
    comentario: "holi",
    mail: "mili.mmc@gmail.com",
    celular: 1126439620,
    opciones: "si queres recibir mas info por mail",
}

guardar_localstorage();













