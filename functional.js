//Escribir la fecha en #date
let cajaFecha = document.getElementById('date');
let fechaHoy = new Date();
console.log(fechaHoy.toLocaleDateString('es-ES'));
let fecha = fechaHoy.toLocaleDateString('es-ES');
const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const numeroDia = fechaHoy.getDay();
const nombreDia = dias[numeroDia];
cajaFecha.innerText = `${nombreDia}, ${fecha}`;

//Checkbox para activar Submit
let checkbox = document.getElementById('privacity');
let submitButton = document.getElementById('submitButton');
checkbox.addEventListener('change', buttonEnabler);
function buttonEnabler() {
	console.log(submitButton.disabled);
	console.log(checkbox.checked);
	submitButton.disabled = !checkbox.checked;
}

//Cambio de imagenes
let cajaCambio=document.querySelector("#paraCambiar");   
cajaCambio.addEventListener("mouseover", (event)=>{
    cajaCambio.setAttribute("src", "assets/Foto1.jpg");
});
cajaCambio.addEventListener("mouseleave", (event)=>{
    cajaCambio.setAttribute("src", "assets/Hidrogeno_Verde_746x419.jpg")
});
