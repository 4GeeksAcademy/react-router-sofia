const getState = ({ getStore,getActions, setStore }) => {
	return {
		store: {
			//aqui debo declarar un array de favoritos que se puedan agregar cuando el usuario lo desee,al igual que array de planets y character.

			characters: [],
			character:{},
			planets: [],
			vehicles: [],

			//favorites: [ ]
		},
		actions: {
						//palnetas
			fetchPlanets: () => {
					
					fetch("https://www.swapi.tech/api/planets")
						.then(response => response.json()) // te trae un respuestas y la convierte en json
									 //setStore({propiedadDeStore:valor})
						.then(data => setStore({planets: data.results })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
						.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
				},
				
		  //personajes / characters
			fetchCharacters: () => {
				fetch("https://swapi.dev/api/people")
				.then(response => response.json()) // te trae un respuestas y la convierte en json
				.then(data => setStore({characters: data.results})) //la guaradara en u espacio de memoria llamado data. data.results en este caso es un array de elementos
																  //esos elementos son los que nos proporciona la url de swapi(result=[{"uid","name","url"}]    
				.catch(err => console.log()("request failed",err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.

			},
          // fetch de personajes de manera individual 
			fetchCharacter: (id) => {
				fetch(`https://swapi.dev/api/people/${id}`)
				.then(response => response.json()) // te trae un respuestas y la convierte en json
				.then(data =>setStore({character: data})) //la guaradara en u espacio de memoria llamado data. data.results en este caso es un array de elementos
																  //esos elementos son los que nos proporciona la url de swapi(result=[{"uid","name","url"}]    
				.catch(err => console.log()("request failed",err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.

			},
						//vehiculos
			fetchVehicles:() => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(response => response.json())  // te trae un respuestas y la convierte en json
				.then(data => setStore({vehicles:data.results})) //la guaradara en u espacio de memoria llamado data. data.results en este caso es un array de elementos
																//esos elementos son los que nos proporciona la url de swapi(result=[{"uid","name","url"}] 
				.catch(err => console.log("request failed",err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
			},
						//favoritos
			//  addToFavorites: (name) => { //addToFavorites tomo un personaje como argumento(name) y su propiedad name
			// const store = getStore(); //se obtiene el estado actual con store
			// const newFavorites = [...store.favorites, character];//creamos un nuevo array que es la copia de "favorites" al que se le agregara un nuevo personaje.
			// 	setStore({ favorites: newFavorites }); //aqui se actualiza la tienda usando setStore
			


		},
	};
};





								///esto era lo que traia la pagina de 4geeks por defecto(lo comento) 
			// changeColor: (index, color) => { //esta funcion se utiliza para cambiar el color de fondo de un de los elemento del array "DEMO"
			// 	//get the store
			// 	const store = getStore();

			// 	// tenemos que hacer un bucle en toda la matriz de demostración para buscar el índice respectivo
			// 	//y cambiar su color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

export default getState;
