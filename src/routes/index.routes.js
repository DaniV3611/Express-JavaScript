// Importa el Router de Express para definir las rutas
import { Router } from "express";
// Importa el controlador para la ruta de índice
import { index } from "../controllers/index.controllers.js";

// Crea una instancia del Router
const router = Router();

// Ruta para la página de inicio
router.get("/", index);

// Exporta el router para ser utilizado en otros archivos
export default router;
