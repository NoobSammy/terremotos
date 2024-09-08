export default class TerremotosService {
	#fechaActual;
	#API_URL;

	constructor() {
		this.#fechaActual = new Date().toLocaleDateString();
		this.#API_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query";
	}

	/**
	 * Realizar petición a la API para obtener terremotos ordenados por magnitud
	 * @param {Number} numRegistros Cantidad de terremotos a obtener
	 * @returns Arreglo de terremotos
	 */
	getTerremotos = async (numRegistros) => {
		const params = new URLSearchParams({
			format: "geojson",
			starttime: this.#fechaActual + "T00:00:00",
			endtime: this.#fechaActual + "T23:59:00",
			orderby: "magnitude",
			limit: numRegistros,
		});

		try {
			const response = await fetch(`${this.#API_URL}&}?${params.toString()}`);
			const data = await response.json();

			return data.features;
		} catch (error) {
			return error;
		}
	};

	get getFechaActual() {
		return this.#fechaActual;
	}
}
