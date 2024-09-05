const $input = document.querySelector("#numRegistros");
const $button = document.querySelector("#btnBuscar");
const $resultados = document.querySelector("#resultados");

const API_URL =
	"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";
const fechaHoy = new Date().get;

$button.addEventListener("click", async () => {
	const numRegistros = $input.value;
	if (isNaN(numRegistros) || numRegistros < 1 || numRegistros > 10) return;

	const terremotos = await getTerremotos(numRegistros);
	imprimirTerremotos(terremotos);
});

const getTerremotos = async (numRegistros) => {
	const params = new URLSearchParams({
		starttime: "2024-09-04T00:00:00",
		endtime: "2024-09-04T23:59:00",
		orderby: "magnitude",
		limit: numRegistros,
	});

	try {
		const response = await fetch(`${API_URL}&${params.toString()}`);
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
			return `<p>${terremoto.properties.title}</p>`;
		})
		.join("");
	$resultados.innerHTML = terremotosHTML;
};
