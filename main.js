const { BrowserWindow, app } = require("electron");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 600,
		height: 600,
		minWidth: 600,
		minHeight: 400,
	});

	//win.webContents.openDevTools();
	win.loadFile("index.html");
};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
