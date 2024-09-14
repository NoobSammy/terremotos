# Los terremotos más fuertes del día

Aplicación de escritorio que permite obtener un top _n_ terremotos más fuertes en
cuanto a magnitud del día actual.

![image](https://github.com/user-attachments/assets/3402e0dd-75f1-4be3-9ea9-c5a13da7db74)


## Instalación

Para ejecutar la aplicación ejecutar los siguientes comandos:

```bash
npm install
npm start
```

Para generar el ejecutable:

```bash
npm run make
```

El ejecutable se encontrará en la carpeta `out/`:

- Windows: `out/terremotos-win32-x64/terremotos.exe`

## API

Esta aplicación hace uso de la API [Earthquake Catalog](https://earthquake.usgs.gov/fdsnws/event/1/) de la USGS

Parámetros de consulta utilizados:

- `starttime`: Fecha actual a las 00:00:00 horas
- `endtime`: Fecha actual a las 23:59:59 horas
- `orderby`: Ordenar por magnitud, de mayor a menor
- `limit`: Limitar los resultados a la cantidad indicada por el usuario
