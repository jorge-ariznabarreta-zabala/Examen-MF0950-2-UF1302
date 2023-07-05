//Escribir la fecha en #date
function fecha() {
	//fecha
	let fechaHoy = new Date();
	let fecha = fechaHoy.toLocaleDateString('es-ES');
	//día
	const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
	const numeroDia = fechaHoy.getDay();
	const nombreDia = dias[numeroDia];

	return `${nombreDia}, ${fecha}`
}
 document.getElementById('date').innerText = fecha()

//Checkbox para activar Submit
let checkbox = document.getElementById('privacity');
let submitButton = document.getElementById('submitButton');
checkbox.addEventListener('change', buttonEnabler);

function buttonEnabler() {
	submitButton.disabled = !checkbox.checked;
}

//Cambio de imagenes
let cajaCambio=document.querySelector("#paraCambiar");   
cajaCambio.addEventListener("mouseover", ()=>{
    funcion_mouseover()
});
cajaCambio.addEventListener("mouseleave", ()=>{
    funcion_mouseleave()
});
function funcion_mouseover() {
	cajaCambio.setAttribute("src", "assets/Foto1.jpg");
};
function funcion_mouseleave() {
	cajaCambio.setAttribute("src", "assets/Hidrogeno_Verde_746x419.jpg")
};
