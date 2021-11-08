const copy = function (obj) {
	return JSON.parse( JSON.stringify(obj) )
}

const app = new Vue({
	el: '#app',
	data: {
		titulo: "App en Vue - CAJA",
		buscar: '',
		subTotal: 0,
		total: 0,
		imp: 1.22,
		productos: [
			{
				codigo: "ABC123",
				nombre: "Manzana",
				precio: 120,
				cantidad: 0
			},
			{
				codigo: "ABC111",
				nombre: "Pera",
				precio: 110,
				cantidad: 0
			},
			{
				codigo: "NN123",
				nombre: "Naranja",
				precio: 100,
				cantidad: 0
			}
		],
		resultados: [],
		agregados: []
	},
	methods: {
		buscarProducto: function (){
			console.log("que tengo para buscar: ", this.buscar)
			this.productos.map( item => {
				// Si lo que estoy buscando 
				// Es igual al codigo del producto que tengo en productos
				if(this.buscar == item.codigo){
					// Entonces agrego ese producto en resultados
					this.resultados.push( item )
				}
			})
		},
		agregarProducto: function (item){
			this.agregados.push( copy(item) )
			// Despues de agregar el producto a la lista
			// Calculo el subtotal
			this.procSubTotal()
		},
		procSubTotal: function (){
			let sum = 0
			this.agregados.map( item => {
				sum += item.precio * item.cantidad
			})
			this.subTotal = sum

			// Cada vez que calcule el subTotal
			// Voy a calcular el total del sistema
			this.procTotal()
		},
		procTotal: function (){
			this.total = this.subTotal * this.imp
		}
	}
})