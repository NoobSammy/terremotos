const $input = document.querySelector("#numRegistros");
const $button = document.querySelector("#btnBuscar");
const $resultados = document.querySelector("#resultados");

const API_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query";
const fechaHoy = new Date().toLocaleDateString();

$button.addEventListener("click", async () => {
	const numRegistros = $input.value;
	if (isNaN(numRegistros) || numRegistros < 1 || numRegistros > 10) return;

	const terremotos = await getTerremotos(numRegistros);
	imprimirTerremotos(terremotos);
});

const getTerremotos = async (numRegistros) => {
	const params = new URLSearchParams({
		format: "geojson",
		starttime: fechaHoy + "T00:00:00",
		endtime: fechaHoy + "T23:59:00",
		orderby: "magnitude",
		limit: numRegistros,
	});

	try {
		const response = await fetch(`${API_URL}&}?${params.toString()}`);
		const data = await response.json();

		return data.features;
	} catch (error) {
		return error;
	}
};

const imprimirTerremotos = (terremotos = []) => {
	let terremotosHTML = "";

	terremotosHTML += terremotos
		.map((terremoto) => {
			return `<article class='card'>
				<header>
					<h3>
						<span class="label error">M ${terremoto.properties.mag}</span>
						${terremoto.properties.place}
					</h3>
				</header>
				<footer>
					${new Date(terremoto.properties.time).toLocaleTimeString()}
				</footer>
			</article>`;
		})
		.join("");
	$resultados.innerHTML = terremotosHTML;
};
