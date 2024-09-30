// Importa las dependencias necesarias
import express from "express";
import cors from "cors";

// Importa las rutas y controladores de la aplicación
import indexRoutes from "./routes/index.routes.js";
import employeeRoutes from "./routes/employees.routes.js";
import { defaultRoute } from "./controllers/index.controllers.js";

// Crea una instancia de la aplicación Express
const app = express();

// Middleware
// Permite que la aplicación entienda los datos en formato JSON
app.use(express.json());
// Habilita el uso de CORS para permitir solicitudes de diferentes orígenes
app.use(cors());

// Rutas
// Configura la ruta principal para las rutas de índice
app.use("/", indexRoutes);
// Configura la ruta para las operaciones relacionadas con empleados
app.use("/employees", employeeRoutes);

// Ruta por defecto para manejar cualquier otra solicitud
app.get("/*", defaultRoute);

// Exporta la aplicación para ser utilizada en otros archivos
export default app;
