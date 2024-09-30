// Importa la instancia de la base de datos desde prisma.js
import { db } from "../prisma.js";

/**
 * Función para obtener todos los empleados de la base de datos.
 * @returns Un array de objetos que representan todos los empleados.
 */
export const getAllEmployeesDB = async () => {
  const employees = await db.employees.findMany();
  return employees;
};

/**
 * Función para obtener la información de un empleado por su ID.
 * @param id - ID del empleado a buscar.
 * @returns Un objeto que representa al empleado encontrado, o null si no existe.
 */
export const getEmployeeDB = async (id) => {
  const employee = await db.employees.findUnique({
    where: { id: id },
  });
  return employee;
};

/**
 * Función para crear un nuevo empleado en la base de datos.
 * @param name - Nombre del nuevo empleado.
 * @param salary - Salario del nuevo empleado.
 * @returns El ID del empleado recién creado.
 */
export const createEmployeeDB = async (name, salary) => {
  const employee = await db.employees.create({
    data: {
      name: name,
      salary: salary,
    },
  });
  return employee.id;
};

/**
 * Función para actualizar un empleado existente en la base de datos.
 * @param id - ID del empleado a actualizar.
 * @param name - Nuevo nombre del empleado.
 * @param salary - Nuevo salario del empleado.
 * @returns El ID del empleado actualizado.
 */
export const updateEmployeeDB = async (id, name, salary) => {
  const employee = await db.employees.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      salary: salary,
    },
  });
  return employee.id;
};

/**
 * Función para eliminar un empleado de la base de datos.
 * @param id - ID del empleado a eliminar.
 * @returns El ID del empleado eliminado.
 */
export const deleteEmployeeDB = async (id) => {
  const employee = await db.employees.delete({
    where: {
      id: id,
    },
  });
  return employee.id;
};
