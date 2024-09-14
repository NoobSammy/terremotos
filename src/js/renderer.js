import TerremotosService from "./terremotos.service.js";
import UIService from "./ui.service.js";

const uiService = new UIService();
const terremotosService = new TerremotosService();

const $button = uiService.$("#btnBuscar");
const $input = uiService.$("#numRegistros");

let terremotos = [];

uiService.imprimirFecha(terremotosService.getFechaActual);

$button.addEventListener("click", async () => {
	const numRegistros = $input.value;
	if (isNaN(numRegistros) || numRegistros < 1 || numRegistros > 25) return;

	uiService.imprimirCarga(numRegistros);
	terremotos = await terremotosService.getTerremotos(numRegistros);
	uiService.imprimirTerremotos(terremotos);
});
