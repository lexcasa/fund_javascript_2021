// t=2
console.log("Mi app ::")

// t=1
const API = 'model/'

let formulario  = document.querySelector("#formulario")

let builder = function (){
	// t= d2
	axios.get(API + 'formulario.json').then( function (success){
		// t= d2 + 1
		let inputs = success.data 
		let tpl    = ``
		for (let i = 0; i < inputs.length; i++){
			tpl += `
				<${inputs[i].name} type="${inputs[i].type}" name="" id="${inputs[i].id}">
				<br>
			`
		}
		tpl += `
			<button type="button">Guardar</button>
		` 
		// Remplazar el HTML que ya tenia el form
		// y agregar el que creamos con template
		// t= d2 + 1
		formulario.innerHTML = tpl

		// axios?? t=d2 + d
		// d2 + 1 < d2 + d

		// Manipular el formulario dentro del controller
		let nombre 		= document.querySelector("#nombre")
		let apellido 	= document.querySelector("#apellido")
		let edad 	 	= document.querySelector("#edad")
		let covid 	 	= document.querySelector("#covid")
		let documento 	= document.querySelector("#documento")

		// t=d
		// cuando cree la url en la linea 16: 'model/persona.json'
		axios.get(API + 'persona.json').then( function (success) {
			// t=d + 2
			console.log("success: ", success.data)
			let persona = success.data 

			// t=d + 1
			nombre.value = persona.nombre
			apellido.value = persona.apellido
			edad.value = persona.edad
			
			// Si esta chequeado 
			// se verifica por la propiedad checked
			covid.checked = persona.covid
			documento.value = persona.documento

		}).catch( function (error){
			console.log("Error: ", error)
		})
	})
}
// t = 2
builder()