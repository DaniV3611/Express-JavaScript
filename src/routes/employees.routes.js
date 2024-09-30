// Importa el Router de Express para definir las rutas
import { Router } from "express";
// Importa los controladores relacionados con empleados
import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "../controllers/employees.controllers.js";

// Crea una instancia del Router
const router = Router();

// Ruta para obtener todos los empleados
router.get("/", getAllEmployees);

// Ruta para crear un nuevo empleado
router.post("/", createEmployee);

// Ruta para actualizar un empleado existente
router.put("/:id", updateEmployee);

// Ruta para eliminar un empleado
router.delete("/:id", deleteEmployee);

// Ruta para obtener un empleado específico por ID
router.get("/:id", getEmployee);

// Exporta el router para ser utilizado en otros archivos
export default router;
