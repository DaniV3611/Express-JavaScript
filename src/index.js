// Importa el módulo 'app' que contiene la configuración y rutas de la API
import app from "./app.js";

// Define el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Inicia el servidor y lo hace escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
