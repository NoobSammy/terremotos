export default class UIService {
	#$resultados;
	#$fechaActual;

	constructor() {
		this.#$resultados = this.$("#resultados");
		this.#$fechaActual = this.$("#fechaActual");
	}

	/**
	 * Mostrar la fecha actual en el titulo
	 * @param {String} fecha
	 */
	imprimirFecha(fecha) {
		this.#$fechaActual.innerHTML = fecha;
	}

	/**
	 * Mostrar una pila de terremotos en el DOM
	 * @param {Array} terremotos Terremotos a imprimir
	 */
	imprimirTerremotos(terremotos = []) {
		let terremotosHTML = "";

		terremotosHTML += terremotos.map(this.getTerremotoComponente).join("");
		this.#$resultados.innerHTML = terremotosHTML;
	}

	/**
	 * Genera el HTML para un terremoto
	 * @param {Object} terremoto Terremoto individual
	 * @param {Number} index Indice del terremoto
	 * @returns HTML del componente como String
	 */
	getTerremotoComponente(terremoto, index) {
		return `<article class='card'>
				<header>
					<h3>
						<span class="label">${index + 1}</span>
						<span class="label error">M ${terremoto.properties.mag}</span>
						${terremoto.properties.place}
					</h3>
				</header>
				<footer>
					🕒 ${new Date(terremoto.properties.time).toLocaleTimeString()}
				</footer>
			</article>`;
	}

	/**
	 * Mostrar animación de carga de terremotos
	 * @param {Number} numRegistros Número de elementos de carga a mostrar
	 */
	imprimirCarga(numRegistros) {
		const skeletonsHTML = "<div class='skeleton'></div>".repeat(numRegistros);
		this.#$resultados.innerHTML = skeletonsHTML;
	}

	/**
	 * Obtener un elemento HTML que coincida con un selector
	 * @param {String} selector
	 * @returns Elemento HTML o null
	 */
	$(selector) {
		return document.querySelector(selector);
	}
}
