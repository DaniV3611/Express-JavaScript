// Importa las funciones de la capa de datos para interactuar con la base de datos
import {
  getAllEmployeesDB,
  getEmployeeDB,
  updateEmployeeDB,
  createEmployeeDB,
  deleteEmployeeDB,
} from "../../lib/utils/crud.js";

// Controlador para obtener todos los empleados
export const getAllEmployees = async (req, res) => {
  // Llama a la función de la base de datos para obtener la lista de empleados
  const employees = await getAllEmployeesDB();
  // Devuelve la lista de empleados en formato JSON
  res.json({ employees: employees });
};

// Controlador para actualizar un empleado existente
export const updateEmployee = async (req, res) => {
  // Extrae el ID del empleado de los parámetros de la solicitud
  const { id } = req.params;
  // Extrae los datos del empleado del cuerpo de la solicitud
  const { name, salary } = req.body;
  // Actualiza el empleado en la base de datos y obtiene el ID del empleado actualizado
  const employeeId = await updateEmployeeDB(Number(id), name, salary);
  // Devuelve un mensaje de éxito
  res.json({ message: `Empleado con id: ${employeeId} actualizado` });
};

// Controlador para crear un nuevo empleado
export const createEmployee = async (req, res) => {
  // Extrae los datos del empleado del cuerpo de la solicitud
  const { name, salary } = req.body;
  // Crea un nuevo empleado en la base de datos y obtiene su ID
  const employeeId = await createEmployeeDB(name, salary);
  // Devuelve un mensaje de éxito
  res.json({ message: `Empleado creado con id: ${employeeId}` });
};

// Controlador para eliminar un empleado
export const deleteEmployee = async (req, res) => {
  // Extrae el ID del empleado de los parámetros de la solicitud
  const { id } = req.params;
  // Elimina el empleado de la base de datos y obtiene su ID
  const employeeId = await deleteEmployeeDB(Number(id));
  // Devuelve un mensaje de éxito
  res.json({ message: `Empleado con id: ${employeeId} eliminado` });
};

// Controlador para obtener un empleado específico por ID
export const getEmployee = async (req, res) => {
  // Extrae el ID del empleado de los parámetros de la solicitud
  const { id } = req.params;
  const idNumber = Number(id);
  // Verifica si el ID es válido
  if (!idNumber) {
    res.json({ employee: null });
    return;
  }
  // Llama a la función de la base de datos para obtener el empleado específico
  const employee = await getEmployeeDB(idNumber);
  // Devuelve el empleado en formato JSON
  res.json({ employee: employee });
};
